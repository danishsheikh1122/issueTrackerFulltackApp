import React from "react";
// import IssueForm from "../../_components/IssueForm";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import dynamic from 'next/dynamic'
import Loadingcmp from "./loading";
interface QueryParama {
  params: { id: string };
}


const editPage = async ({ params: { id } }: QueryParama) => {
  const IssueForm=dynamic(()=>import('@/app/issues/_components/IssueForm'),{ssr:false ,loading:()=><Loadingcmp></Loadingcmp>})
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
