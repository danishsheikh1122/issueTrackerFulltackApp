import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { IssueBadge } from "@/app/components/index";
import ReactMarkDown from "react-markdown";
import delay from "delay";
import Link from "next/link";
interface Props {
  params: { id: string };
}
const ViewIssueDetailsPage = async ({ params: { id } }: Props) => {
  await delay(1000);
  //   if (typeof id !== 'number') notFound(); if in route client passes any alphabet the it will render the 404 page
  const issueData = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });
  if (!issueData) notFound();

  return (
    <div className="mt-8 ml-6">
      <h1 className="text-xl font-bold mb-2 capitalize">{issueData.title}</h1>
      <div className="flex gap-4 items-center ">
        <IssueBadge status={issueData.status} />
        <span>{issueData.createdAt.toDateString()}</span>
      </div>

      <div className="w-full flex">
        <div className="w-1/2">
          <ReactMarkDown className="prose  border border-solid border-zinc-300 w-full h-auto p-4 mt-4 rounded-md capitalize">
            {issueData.description}
          </ReactMarkDown>
        </div>
        <div className="btnContainer w-1/2  py-4 px-8">
          <Link
            href={`/issues/${issueData.id}/edit?id=${issueData.id}`}
            className="btn btn-primary btn-outline px-6 rounded-xl capitalize"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#D4D4D4"
            >
              <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
            </svg>
            edit
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ViewIssueDetailsPage;
