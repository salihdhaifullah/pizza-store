import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import NextCors from 'nextjs-cors';
import passport from 'passport';
import '../../../../libs/passport';


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
