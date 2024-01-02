"use client";
import React from "react";
import AuthenticationPage from "@/components/auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
    return (
        <div>
            <AuthenticationPage data="login" />
        </div>
    );
};

export default Page;
