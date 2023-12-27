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
        const data = await db.admin.findFirst({
            where: {
                email,
            },
        });
        if (data) {
            return new NextResponse("User Already Exists", { status: 400 });
        }
        const name = "ABC XYZ";
        const server = await db.admin.create({
            data: {
                email,
                password,
                name,
            },
        });
        return new NextResponse(JSON.stringify(server), { status: 200 });
    } catch (err) {
        console.log("[api/signup] Error: ", err);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
