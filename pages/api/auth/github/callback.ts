import { setCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";
import passport from 'passport';
import nextConnect from 'next-connect';
import NextCors from 'nextjs-cors';
import '../../../../libs/passport';



const handler = nextConnect()
handler.use(passport.initialize());

handler.get(async (req: NextApiRequest, res: NextApiResponse, next) => {
    await NextCors(req, res, {
        origin: 'http://localhost:3000',
        credentials: true,
        methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    })



    await passport.authenticate('github', (err: any, user: any, info: any) => {
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