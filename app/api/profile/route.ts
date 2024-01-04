import { db } from "@/db/db";
import { User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { id } = await req.json();
        if (!id) {
            return new NextResponse("Bad Request", { status: 400 });
        }
        const data = await db.user.findUnique({
            where: {
                id,
            },
        });
        if (data?.email) {
            return NextResponse.json({ ...data, password: "" });
        }
        return new NextResponse("Some error occured in DB", { status: 500 });
    } catch (err) {
        console.log("[api/profile/get] Error: ", err);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    try {
        const newUser = await req.json();
        if (!newUser.id) {
            return new NextResponse("ID not availaible", { status: 500 });
        }
        const user = await db.user.findUnique({
            where: {
                id: newUser.id,
            },
        });
        if (user) {
            console.log(newUser);
            const res = await db.user.update({
                where: {
                    id: newUser.id,
                },
                data: {
                    username: newUser.username,
                    email: newUser.email,
                    bio: newUser.bio,
                },
            });
            if (res) {
                return new NextResponse("Profile Updated", { status: 200 });
            }
            return new NextResponse("Some error occured in DB", {
                status: 500,
            });
        }
    } catch (err) {
        console.log("[api/profile/update] Error: ", err);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
