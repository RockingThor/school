"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";
import { routeModule } from "next/dist/build/templates/app-page";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
    loginForm?: string;
}

const formSchema = z.object({
    email: z.string().email({
        message: "Input must be a valid email",
    }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .max(50, { message: "Password cannot be longer than 50 characters" })
        .refine((password) => /[A-Z]/.test(password), {
            message: "Password must contain at least one uppercase letter",
        })
        .refine((password) => /[a-z]/.test(password), {
            message: "Password must contain at least one lowercase letter",
        })
        .refine((password) => /\d/.test(password), {
            message: "Password must contain at least one digit",
        })
        .refine(
            (password) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password),
            {
                message: "Password must contain at least one special character",
            }
        ),
});

export function UserAuthForm({
    className,
    loginForm,
    ...props
}: UserAuthFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(data: z.infer<typeof formSchema>) {
        setIsLoading(true);
        const res = await axios.post("/api/signup", data);
        if (res.status == 200) {
            router.push("/admin/login");
        }
        setIsLoading(false);
    }

    async function handleSignIn(data: z.infer<typeof formSchema>) {
        setIsLoading(true);
        const res = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        });
        if (res?.ok) {
            router.push("/admin/home");
        }
        setIsLoading(false);
    }

    return (
        <div
            className={cn("grid gap-6", className)}
            {...props}
        >
            <Form {...form}>
                <form
                    onSubmit={
                        loginForm
                            ? form.handleSubmit(handleSignIn)
                            : form.handleSubmit(onSubmit)
                    }
                    className="space-y-8"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    className="sr-only"
                                    htmlFor="email"
                                >
                                    Email
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        id="email"
                                        placeholder="name@example.com"
                                        type="email"
                                        autoCapitalize="none"
                                        autoComplete="email"
                                        autoCorrect="off"
                                        disabled={isLoading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    className="sr-only"
                                    htmlFor="email"
                                >
                                    Password
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        id="password"
                                        placeholder="Enter Password"
                                        type="password"
                                        autoCapitalize="none"
                                        autoCorrect="off"
                                        disabled={isLoading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button disabled={isLoading}>
                        {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        {loginForm
                            ? "Login With Email & Password"
                            : "Sign Up With Email & Password"}
                    </Button>
                </form>
            </Form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <Button
                variant="outline"
                type="button"
                disabled={isLoading}
                onClick={() => "Hello"}
            >
                {isLoading ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Icons.google className="mr-2 h-4 w-4" />
                )}{" "}
                Google
            </Button>
        </div>
    );
}
