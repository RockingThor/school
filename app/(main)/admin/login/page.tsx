"use client";
import React from "react";
import AuthenticationPage from "@/components/auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
    const session = useSession();
    const router = useRouter();
    if (session.data) {
        router.push("/admin/home");
    }
    return (
        <div>
            <AuthenticationPage data="login" />
        </div>
    );
};

export default Page;
