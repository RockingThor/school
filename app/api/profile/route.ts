import { db } from "@/db/db";
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
