import { setCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";
import  '../../../../libs/passport';
import passport from 'passport';

const handler = async (req: NextApiRequest, res: NextApiResponse, next: any) => {
    passport.authenticate('github', (err: any, user: any, info: any) => {

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

            res.redirect('http://localhost:3000/?auth_success=true');
        } catch (error: any) {
            res.status(500).end().json({ message: error.message });
            console.log(error)
        }
    })
}

export default handler;