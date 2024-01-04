"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
    const router = useRouter();
    return (
        <div className="flex justify-center ">
            <div className="space-y-6 p-10">
                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-slate-900 dark:border-gray-700">
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                            Create New Result Data
                        </p>
                    </div>
                    <div className="p-4 md:p-5">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                            If you want to upload a new result proceed with this
                        </h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                            Click the below button to create new result data
                        </p>
                        <a
                            className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            onClick={() => router.push("/admin/create/result")}
                        >
                            Create Result Data
                            <svg
                                className="flex-shrink-0 w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="space-y-6 p-10">
                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-slate-900 dark:border-gray-700">
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                            Create New Notification
                        </p>
                    </div>
                    <div className="p-4 md:p-5">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                            Card title
                        </h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                            With supporting text below as a natural lead-in to
                            additional content.
                        </p>
                        <a
                            className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            onClick={() =>
                                router.push("/admin/create/notification")
                            }
                        >
                            Card link
                            <svg
                                className="flex-shrink-0 w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
