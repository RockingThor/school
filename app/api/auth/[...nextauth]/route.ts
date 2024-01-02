import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { randomBytes, randomUUID } from "crypto";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            async authorize(credentials: any, req: any) {
                const { email, password } = credentials;
                if (email && password) {
                    //console.log("Was here");
                    const response = await axios.post(
                        "http://localhost:3000/api/signin",
                        {
                            email,
                            password,
                        }
                    );
                    //console.log(response);
                    if (response.status === 200) {
                        return { id: response.data.id };
                    }
                } else {
                    return null;
                }
                return null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
        // ...add more providers here
    ],
    pages: {
        signIn: "/admin/login",
    },
    // session: {
    //     strategy: "database",
    //     maxAge: 30 * 24 * 60 * 60,
    //     updateAge: 24 * 60 * 60,
    //     generateSessionToken: () => {
    //         return randomUUID?.() ?? randomBytes(32).toString("hex");
    //     },
    // },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
