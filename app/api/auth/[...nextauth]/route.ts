import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/db/db";
import axios from "axios";

export const authOptions = {
    adapter: PrismaAdapter(db),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: any, req: any) {
                const apiUrl = "http://localhost:3000/api/signup";
                const response = await axios.post(apiUrl, credentials);

                const user = response.data;

                if (response.status == 200 && user) {
                    return user;
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
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
