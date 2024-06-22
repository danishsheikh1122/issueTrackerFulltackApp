import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
interface Props {
  params: { id: string };
}
const ViewIssueDetailsPage = async ({ params: { id } }: Props) => {
//   if (typeof id !== 'number') notFound();
  const issueData = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });
  if (!issueData) notFound();

  return <div>ViewIssueDetailsPage {issueData.title}</div>;
};

export default ViewIssueDetailsPage;
