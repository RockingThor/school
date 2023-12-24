"use client";
import React from "react";

interface PageProps {
  params: {
    class: string;
  };
}

const Page = ({ params }: PageProps) => {
  return <div>Page</div>;
};

export default Page;
