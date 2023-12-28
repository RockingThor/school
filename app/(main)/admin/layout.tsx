import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Session } from "next-auth";
import AdminLayout from "@/components/layout/adminLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Admin dashboard for your school",
};

export default function RootLayout({
    children,
    session,
}: {
    children: React.ReactNode;
    session: Session;
}) {
    return <AdminLayout session={session}>{children}</AdminLayout>;
}
