import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    req.cookies?.token = null;
    res.status(200).json({
        message: 'Logout success'
    })
}

export default handler;