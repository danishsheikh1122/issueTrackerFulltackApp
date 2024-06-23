import React from "react";
import IssueForm from "../../_components/IssueForm";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
interface QueryParama {
  params: { id: string };
}
const editPage = async ({ params: { id } }: QueryParama) => {
  const intId = parseInt(id);
  const issueDetails = await prisma.issue.findUnique({
    where: { id: intId },
  });
  if(!issueDetails) notFound()
  // console.log(issueDetails);
  
  return (
    <>
      <IssueForm  issueId={intId} issueTitle={issueDetails?.title} issueDescription={issueDetails?.description}/>;
    </>
  );
};

export default editPage;
