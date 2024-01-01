import { db } from "@/db/db";
import { NextResponse } from "next/server";

interface User {
    email: string;
    password: string;
}
export async function POST(req: Request) {
    try {
        const { email, password }: User = await req.json();
        if (!email || !password || password.length < 8) {
            return new NextResponse("Bad Request", { status: 400 });
        }
        const data = await db.user.findFirst({
            where: {
                email,
            },
        });
        if (!data) {
            return new NextResponse("No user exist with the mail", {
                status: 400,
            });
        }
        if (data?.password === password) {
            return NextResponse.json(data);
        } else {
            return new NextResponse("Bad Request", { status: 400 });
        }
    } catch (err) {
        console.log("[api/signup] Error: ", err);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
