import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import NextCors from 'nextjs-cors';
import Session from 'express-session'
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import prisma from "../../../../libs/prisma/prisma";
import  jwt  from 'jsonwebtoken';

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


const handler = nextConnect()
handler.use(passport.initialize());


handler.get(async (req: NextApiRequest, res: NextApiResponse, next) => {
    NextCors(req, res, {
        origin: 'http://localhost:3000',
        credentials: true,
        methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    })
    passport.authenticate('google', {
        scope: ['profile', 'email'],
        session: false,
        successRedirect: 'http://localhost:3000/?auth_success=true',
        failureRedirect: 'http://localhost:3000/?auth_success=false',
        failureFlash: true
    })(req, res, next)
    next();
})

export default handler;
