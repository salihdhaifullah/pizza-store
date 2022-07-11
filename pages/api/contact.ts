import { NextApiRequest, NextApiResponse } from "next";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    res.send(`<h1>Hello World</h1>`);
}

export default handler;