import { setCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";
import passport from 'passport';
import nextConnect from 'next-connect';
import NextCors from 'nextjs-cors';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import Session  from 'express-session';
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


passport.serializeUser((user: any, done: any) => {
    return done(null, user);
});

passport.deserializeUser((user: any, done: any) => {
    return done(null, user);
});

const handler = nextConnect()
handler.use(passport.initialize());

handler.get(async (req: NextApiRequest, res: NextApiResponse, next) => {
    await NextCors(req, res, {
        origin: 'http://localhost:3000',
        credentials: true,
        methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    })



    await passport.authenticate('google', (err: any, user: any, info: any) => {
        try {
            if (err) return res.redirect('http://localhost:3000/?auth_success=false');

            if (!user) return res.status(401).json({ message: "Auth failed" })

            setCookie("token", info.token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: 1000 * 60 * 60 * 2,
                expires: new Date(Date.now() + 1000 * 60 * 60 * 2),
                path: "/",
                req,
                res
            })


            res.status(200).redirect('http://localhost:3000/?auth_success=true');
        } catch (error: any) {
            res.status(500).json({ message: error.message });
            console.log(error)
        }
    })(req, res, next)
})

export default handler;