import { NextApiRequest, NextApiResponse } from "next";

const hello = (req: NextApiRequest, res: NextApiResponse) => {
    res.send('<h1>Hello World</h1>');
}

export default hello;