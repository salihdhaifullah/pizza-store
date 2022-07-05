import { NextApiRequest, NextApiResponse } from "next";
import { getCookie } from "cookies-next";
const hello = async (req: NextApiRequest, res: NextApiResponse) => {
    const cookie = await getCookie('session', { req, res });
    res.send(`<h1>Hello World</h1>
    <p>cookie: ${cookie}</p>`);
}

export default hello;