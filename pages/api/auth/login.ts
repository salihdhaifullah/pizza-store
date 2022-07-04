import prisma from '../../../libs/prisma/prisma';
import jwt from 'jsonwebtoken';
import { compareSync } from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password, method } = req.body as any;
    const user = await prisma.user.findUnique({ where: { email: email } });
    try {

        if (!user) return res.status(400).json({ error: `user with this email ${email} dose not exist` })

        else {
            if (password && email && user.method === 'LOCAL' && user.password) {
                const isMatch = compareSync(password, user.password)
                if (!isMatch) return res.status(400).json({ error: `password is incorrect` })
                else {
                    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: '2h' });

                    res.setHeader("set-cookie", `token=${token}; path=/; samesite=lax; httponly; ${process.env.NODE_ENV === 'production' ? 'secure;' : ''} expires=${new Date(Date.now() + 1000 * 60 * 60 * 2).toUTCString()}; max-age=${1000 * 60 * 60 * 2};`);

                    return res.status(200).json({ user, massage: "login success" })
                }
            } else if (method && email && user.method !== "LOCAL") {
                const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: '2h' });

                res.setHeader("set-cookie", `token=${token}; path=/; samesite=lax; httponly; ${process.env.NODE_ENV === 'production' ? 'secure;' : ''} expires=${new Date(Date.now() + 1000 * 60 * 60 * 2).toUTCString()}; max-age=${1000 * 60 * 60 * 2};`);

                return res.status(200).json({ user, massage: "login success" })

            }
            else return res.status(400).json({ error: 'you must fill all fields or sing up with google or github' })
        }
    } catch (error) {
        console.log(error)
    }
}

export default handler;