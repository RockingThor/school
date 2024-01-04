"use client";
import React from "react";
import { z } from "zod";

const formSchema = z.object({
    class: z
        .string()
        .min(1, { message: "Please select a class." })
        .max(2, { message: "Please select a valid class." }),
    totalSubject: z
        .string()
        .min(1, { message: "Please select a total subject." })
        .max(2, { message: "Please select a valid total subject." }),
    totalStudent: z
        .string()
        .min(1, { message: "Please select a total student." })
        .max(3, { message: "Please select a valid total student." }),
});

const Page = () => {
    return <div></div>;
};

export default Page;
