"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    classNo: z
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

const formSchema2 = z.object({
    subjectName: z
        .string()
        .min(1, { message: "Subject name is required" })
        .max(15, { message: "Subject name is too long" }),
});

const Page = () => {
    const [subjectForm, setSubjectForm] = useState<string[]>([]);
    const [subjectCount, setSubjectCount] = useState(0);
    const [subjectsRemain, setSubjectRemain] = useState(0);
    const [isDisabledSubject, setIsDisabledSubject] = useState(true);
    const [isSubjectAreaActive, setIsSubjectAreaActive] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            classNo: "",
            totalSubject: "",
            totalStudent: "",
        },
    });
    useEffect(() => {
        if (subjectsRemain <= 0) {
            setIsDisabledSubject(true);
        } else {
            setIsDisabledSubject(false);
        }
    }, [subjectsRemain]);

    const form2 = useForm<z.infer<typeof formSchema2>>({
        resolver: zodResolver(formSchema2),
        defaultValues: {
            subjectName: "",
        },
    });
    function onSubmitInitialValues(data: z.infer<typeof formSchema>) {
        const { classNo, totalSubject, totalStudent } = data;
        let subjects: number = parseInt(totalSubject);
        setSubjectCount(subjects);
        setIsSubjectAreaActive(true);
        setSubjectRemain(subjects);
        let students: number = parseInt(totalStudent);
        let currentClass: number = parseInt(classNo);
        const resultStructure = {};
    }

    function onSubmitForm2(data: z.infer<typeof formSchema2>) {
        const { subjectName } = data;
        setSubjectForm([...subjectForm, subjectName]);
        setSubjectRemain(subjectsRemain - 1);
        form2.reset();
    }

    return (
        <div>
            <div className="flex justify-center">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmitInitialValues)}
                        className="space-y-8"
                    >
                        <div className="flex space-x-8">
                            <FormField
                                control={form.control}
                                name="classNo"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Class</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter Class"
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
                                name="totalSubject"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Total Subjects</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter subject count"
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
                                name="totalStudent"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Total Students</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter student count"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription></FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {}
                            <div className="mt-8">
                                <Button type="submit">Submit</Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
            {isSubjectAreaActive && (
                <div>
                    {
                        <div className="flex justify-center items-center">
                            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm m-2">
                                Subjects you have entered:{" "}
                            </div>
                            {subjectForm.map((subject) => (
                                <div
                                    key={subject}
                                    className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm m-1"
                                >
                                    {subject}
                                </div>
                            ))}
                        </div>
                    }
                    <div className="flex justify-center items-center">
                        <div className="">
                            <Form {...form2}>
                                <form
                                    onSubmit={form2.handleSubmit(onSubmitForm2)}
                                    className="space-y-8"
                                >
                                    <div className="flex space-x-8">
                                        <FormField
                                            control={form2.control}
                                            name="subjectName"
                                            disabled={isDisabledSubject}
                                            render={({ field }) => (
                                                <FormItem className="flex">
                                                    <FormLabel className="mt-4">
                                                        Subject Name
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Enter subject"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormDescription></FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <div className="mt-2">
                                            <Button
                                                disabled={isDisabledSubject}
                                                type="submit"
                                            >
                                                Submit
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </Form>
                        </div>
                        {!isDisabledSubject && (
                            <div className="mt-2 p-4">
                                <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                                    Please Enter {subjectsRemain} more subjects
                                    to proceed.
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
