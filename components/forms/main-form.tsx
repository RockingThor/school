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
                    Input {"Student's"} Details
                </div>
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
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
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell className="text-right">
                                $2,500.00
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    );
};

export default MainForm;
