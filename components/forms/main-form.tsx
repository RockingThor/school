"use client";
import React, { useState } from "react";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

interface Sample {
    roll: number;
    name?: string;
    numbers?: string[];
    subjects?: string[];
    obtained: number[];
}
interface Props {
    classNo: number;
    section: string;
    subjectCount: number;
    students: number;
    subjects: string[];
    sampleData: Sample[];
}

const MainForm = ({
    classNo,
    section,
    subjectCount,
    students,
    subjects,
    sampleData,
}: Props) => {
    return (
        <div>
            <div className="p-2">
                {" "}
                <div className="flex justify-center items-center text-xl">
                    Input {"Student's"} Details for Class {classNo}-{section}
                </div>
                <Table className="mt-4   border-2 rounded-md border-black">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Roll</TableHead>
                            <TableHead>Name</TableHead>
                            {subjects?.map((subject) => (
                                <TableHead key={subject}>{subject}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sampleData?.map((data) => (
                            <TableRow key={data.roll}>
                                <TableCell className="font-medium">
                                    {data.roll}
                                </TableCell>
                                <TableCell className="font-medium">
                                    <Input
                                        placeholder="Enter Name"
                                        onChange={(e) =>
                                            (data.name = e.target.value)
                                        }
                                    />
                                </TableCell>
                                {subjects.map((subject, i) => (
                                    <TableCell key={subject}>
                                        <Input
                                            placeholder={subject}
                                            onChange={(e) => {
                                                if (data.obtained.length > i) {
                                                    data.obtained[i] = parseInt(
                                                        e.target.value
                                                    );
                                                }
                                            }}
                                        />
                                    </TableCell>
                                ))}
                                <TableCell></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter></TableFooter>
                </Table>
            </div>
        </div>
    );
};

export default MainForm;
