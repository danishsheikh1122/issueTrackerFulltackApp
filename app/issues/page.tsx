import React from "react";
import Link from "next/link";
import prisma from "@/prisma/client";
//adding custome delay
import delay from "delay";
import FilterComponent from "./FilterComponent";
//importing issuetrackerBadge
import { IssueBadge } from "../components/index";
import { Issue, Status } from "@prisma/client";
import Pagination from "../components/Pagination";
import { IconBase } from "react-icons/lib";

// interface orderStatus {
//   Title: "title";
//   Status: "status";
//   CreatedAt: "createdAt";
// }

interface QueryParams {
  searchParams: { filterBy: Status; orderBy: keyof Issue; page: string };
}

const IssuePage = async ({
  searchParams: { filterBy, orderBy, page },
}: QueryParams) => {

  const tableHeadData: {
    label: string;
    value: keyof Issue;
    classname: string;
  }[] = [
    {
      label: "Issue",
      value: "title",
      classname: "text-left font-semibold capitalize text-base ",
    },
    {
      label: "Status",
      value: "status",
      classname: "text-left font-semibold capitalize text-base ",
    },
    {
      label: "created at",
      value: "createdAt",
      classname:
        "text-left font-semibold capitalize hidden lg:block md:block text-base  ",
    },
  ];
  const Page=parseInt(page) || 1 //if no page value the pass deafult val as 1
  const pageSize=10 //page size 

  //adding custome delat
  // await delay(2000);
  //if user sends bad request http://localhost:3000/issues?filterBy=OPENasd to handel it below code starts-->
  const status = Object.values(Status);
  // console.log(status);
  const finalStatus = status.includes(filterBy) ? filterBy : undefined;

  //doing same for orderBy query params
  // const orderStatus={
  //   Title:'title',
  //   Status:'status',
  //   CreatedAt:'createdAt'

  // }
  // const orderBy:orderStatus=
  // Object.values(orderStatus).includes(orderBy)? orderBy : undefined;
  // console.log(orderBy);
  // console.log(finalStatus);
  // console.log(orderStatus);
  // console.log(Object.values(orderStatus));
  // console.log(Object.values(orderStatus).includes(orderBy));
  // console.log(Object.values(orderStatus).includes(orderBy)? orderBy : undefined);

  // ends <----
  const data = await prisma.issue.findMany({
    where: { status: finalStatus },
    orderBy: orderBy ? { [orderBy]: "asc" } : undefined,
    skip:(Page-1)*pageSize,
    take:pageSize,
  });
  const issueCount = await prisma.issue.count({where:{status: finalStatus}});
  console.log(issueCount)
  // ends <----

  //imp sorting with issue open and created At 69.3

  return (
    <div data-theme="fantasy">
      <div className="flex flex-col-reverse  md:flex md:flex-col-reverse lg:flex lg:flex-row lg:justify-between">
        <FilterComponent />
        <Link
          href="/issues/new"
          className="lg:w-1/5 w-1/2 md:w-1/5 btn btn-outline btn-primary rounded-md mx-4 my-2 capitalize"
        >
          create new issue
        </Link>
      </div>
      <div className="overflow-x-auto mb-4 mx-4 border border-solid border-zinc-200 rounded-md">
        <table className="table ">
          {/* head */}
          <thead className="bg-gray-300">
            <tr>
              {/* <th className="text-left font-semibold">#</th> */}
              {tableHeadData.map(({ label, value, classname }) => (
                <th key={value} className={classname}>
                  <Link
                    href={`/issues?filterBy=${filterBy}&orderBy=${value}`}
                    className="flex items-center"
                  >
                    {label}
                    {orderBy === value && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#5f6368"
                      >
                        <path d="M440-80v-647L256-544l-56-56 280-280 280 280-56 57-184-184v647h-80Z" />
                      </svg>
                    )}
                  </Link>
                </th>
              ))}
              {/* <th className="text-left font-semibold capitalize text-base">
                title
              </th>
              <th className="text-left font-semibold capitalize text-base">
                status
              </th>
              <th className="text-left font-semibold capitalize hidden lg:block md:block text-base">
                created at
              </th> */}
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {data.map((issue) => (
              <tr className="hover" key={issue.id}>
                {/* <th>{issue.id}</th> */}
                <td className="capitalize">
                  <Link
                    href={`/issues/${issue.id}`}
                    className="text-blue-400 hover:underline"
                  >
                    {issue.title}
                  </Link>
                </td>
                <td>
                  <IssueBadge status={issue.status}></IssueBadge>
                </td>
                <td className="hidden lg:block md:block">
                  {issue.createdAt.toDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* adding paginaition cmo */}
      </div>
      <div className="mx-4" >
        <Pagination itemCount={issueCount} currentPage={Page} pageSize={pageSize}></Pagination>
      </div>
    </div>
  );
};

export default IssuePage;
