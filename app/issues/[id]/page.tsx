import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueBadge from "@/app/components/issueBadge/IssueBagde";
interface Props {
  params: { id: string };
}
const ViewIssueDetailsPage = async ({ params: { id } }: Props) => {
  //   if (typeof id !== 'number') notFound();
  const issueData = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });
  if (!issueData) notFound();

  return (
    <div className="mt-8 ml-6 ">
      <h1>{issueData.title}</h1>
      <div className="flex gap-4">
        <IssueBadge status={issueData.status} />
      </div>
    </div>
  );
};

export default ViewIssueDetailsPage;
