import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import prisma from './prisma/prisma'
import jwt from "jsonwebtoken";

if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) throw new Error("Github auth is not configured")
passport.use("github", new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        callbackURL: "http://localhost:3000/api/auth/github/callback",
},
        async (accessToken: string, refreshToken: string, profile: any, done: any) => {
                try {
                        console.log(profile)
                        const user = await prisma.user.findUnique({
                                where: {
                                        email: profile.profileUrl
                                }
                        });
                        if (!user) {
                                // create new user
                                const newUser = await prisma.user.create({
                                        data: {
                                                email: profile.profileUrl, 
                                                name: profile.username,
                                                method: 'PROVIDER'
                                        }
                                });
                                const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET as string, { expiresIn: '2h' });
                                done(null, newUser, { message: "Auth successful", token });
                        } else {
                                // login existing user
                                const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '2h' });
                                done(null, user, { message: "Auth successful", token });
                        }
                } catch (err) {
                        console.error(err);
                        done(err, false, { message: "Internal server error" });
                }
        }
));




if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) throw new Error("Google auth is not configured");

passport.use("google", new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        callbackURL: "http://localhost:3000/api/auth/google/callback"
},
        async (accessToken: string, refreshToken: string, profile: any, done: any) => {

                try {
                        const user = await prisma.user.findUnique({
                                where: {
                                        email: profile.email
                                }
                        });
                        if (!user) {
                                // create new user
                                const newUser = await prisma.user.create({
                                        data: {
                                                email: profile.email,
                                                name: profile.displayName,
                                                method: 'PROVIDER'
                                        }
                                });
                                const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET as string, { expiresIn: '2h' });
                                done(null, newUser, { message: "Auth successful", token });
                        } else {
                                // login existing user
                                const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '2h' });
                                done(null, user, { message: "Auth successful", token });
                        }
                } catch (err) {
                        console.error(err);
                        console.log('fucked me ass');
                        done(err, false, { message: "Internal server error" });
                }

        }
));


passport.serializeUser((user: any, done: any) => {
        return done(null, user);
});

passport.deserializeUser((user: any, done: any) => {
        return done(null, user);
});