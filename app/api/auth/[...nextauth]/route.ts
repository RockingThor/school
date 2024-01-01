import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/db/db";
import axios from "axios";
import { pages } from "next/dist/build/templates/app-page";

export const authOptions = {
    adapter: PrismaAdapter(db),
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
                        console.log(response);
                        return response.data;
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
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
