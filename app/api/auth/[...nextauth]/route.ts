import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    if (req?.query?.nextauth?.includes("callback") && req.method === "POST") {
        console.log(
            "Handling callback request from my Identity Provider",
            req.body
        );
    }

    // Get a custom cookie value from the request
    const someCookie = req.cookies["some-custom-cookie"];

    return await NextAuth(req, res, {
        providers: [],
    });
}
