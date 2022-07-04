import prisma from '../../../libs/prisma/prisma';
import jwt from 'jsonwebtoken';
import { genSaltSync, hashSync } from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    const { email, name, password, method } = req.body as any;
    const user = await prisma.user.findUnique({ where: { email: email } })
    try {

        if (!user) {
            if (password && name && email && !method) {
                const salt = genSaltSync(10);
                const hashPassword = hashSync(password, salt)
                const newUser = await prisma.user.create({
                    data: {
                        name,
                        email,
                        password: hashPassword
                    }
                })

                const token = jwt.sign({ id: newUser.id, }, process.env.JWT_SECRET as string, { expiresIn: '2h' })

                res.setHeader("set-cookie", `token=${token}; path=/; samesite=lax; httponly; ${process.env.NODE_ENV === 'production' ? 'secure;' : ''} expires=${new Date(Date.now() + 1000 * 60 * 60 * 2).toUTCString()}; max-age=${1000 * 60 * 60 * 2};`);

                return res.status(200).json({ newUser, massage: "sing up success" })
            }
            else if (name && email && method) {

                const newUser = await prisma.user.create({
                    data: {
                        name,
                        email,
                        method: 'PROVIDER'
                    }
                })

                const token = jwt.sign({ id: newUser.id, role: newUser.role }, process.env.JWT_SECRET as string, { expiresIn: '2h' })

                res.setHeader("set-cookie", `token=${token}; path=/; samesite=lax; httponly; ${process.env.NODE_ENV === 'production' ? 'secure;' : ''} expires=${new Date(Date.now() + 1000 * 60 * 60 * 2).toUTCString()}; max-age=${1000 * 60 * 60 * 2};`);

                return res.status(200).json({ newUser, massage: "sing up success" })
            }

            else return res.status(400).json({ error: 'you must fill all fields or sing up with google or github' })

        }
        else return res.status(400).json({ error: "user already exist try login" })
    } catch (error) {
        console.log(error)
    }
}


export default handler;