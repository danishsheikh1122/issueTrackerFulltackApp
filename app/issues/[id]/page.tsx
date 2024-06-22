import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { IssueBadge } from "@/app/components/index";
import ReactMarkDown from 'react-markdown';
import delay from 'delay'

interface Props {
  params: { id: string };
}
const ViewIssueDetailsPage = async ({ params: { id } }: Props) => {
    await delay(1000)
  //   if (typeof id !== 'number') notFound(); if in route client passes any alphabet the it will render the 404 page
  const issueData = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });
  if (!issueData) notFound();

  return (
    <div className="mt-8 ml-6 ">
      <h1 className="text-xl font-bold mb-2 capitalize">{issueData.title}</h1>
      <div className="flex gap-4 items-center ">
        <IssueBadge status={issueData.status} />
        <span>{issueData.createdAt.toDateString()}</span>
      </div>
      <ReactMarkDown className="prose  border border-solid border-zinc-300 w-1/2 h-auto p-4 mt-4 rounded-md capitalize">{issueData.description}</ReactMarkDown>
    </div>
  );
};
export default ViewIssueDetailsPage;
