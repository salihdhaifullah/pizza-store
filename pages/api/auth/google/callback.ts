import { setCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";
import passport from "passport";
import prisma from "../../../../libs/prisma/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse, next: any) => {
    await prisma.$connect();
    passport.authenticate('google', (err: any, user: any, info: any) => {
        if (err) return res.redirect('http://localhost:3000/?auth_success=false');

        if (!user) return res.status(401).json({ message: "Auth failed" })

        setCookie("token", user.token, {
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
    
    })
}

export default handler;