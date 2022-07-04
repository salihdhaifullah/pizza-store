import { NextApiRequest, NextApiResponse } from 'next';
import passport from 'passport';
import prisma from '../../../../libs/prisma/prisma';
import '../../../../libs/passport';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await prisma.$connect();
    passport.authenticate('google', {
        scope: ['profile', 'email'],
        session: false
    })(req, res, () => {});
}

export default handler;