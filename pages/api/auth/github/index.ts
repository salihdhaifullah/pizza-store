import { NextApiRequest, NextApiResponse } from 'next';
import  '../../../../libs/passport';
import passport from 'passport';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    passport.authenticate('github', {
        scope: ['profile', 'email'],
        session: false
    })(req, res);
}

export default handler;