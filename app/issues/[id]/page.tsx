import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueBadge from "@/app/components/issueBadge/IssueBagde";
interface Props {
  params: { id: string };
}
const ViewIssueDetailsPage = async ({ params: { id } }: Props) => {
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
      <div className="border border-solid border-zinc-300 w-1/3 h-fit p-4 mt-4 rounded-md capitalize">{issueData.description}</div>
    </div>
  );
};

export default ViewIssueDetailsPage;
