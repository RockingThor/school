"use client";
import { Separator } from "@/components/separator";
import { ProfileForm } from "@/components/forms/profile-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SettingsProfilePage() {
    const { data: session } = useSession();
    const router = useRouter();
    if (!session) {
        router.push("/admin/signup");
    }
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Profile</h3>
                <p className="text-sm text-muted-foreground">
                    This is how others will see you on the site.
                </p>
            </div>
            <Separator />
            <ProfileForm />
        </div>
    );
}
