import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import prisma from './prisma/prisma'
import jwt from "jsonwebtoken";

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    callbackURL: "http://localhost:3000/api/auth/google/callback",
    passReqToCallback: true,
},
    async (request: any, accessToken: string, refreshToken: string, profile: any, done: any) => {
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
            done(err, false, { message: "Internal server error" });
        }
    }
));