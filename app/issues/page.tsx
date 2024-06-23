import React from "react";
import Link from "next/link";
import prisma from "@/prisma/client";
//adding custome delay
import delay from "delay";

//importing issuetrackerBadge
import { IssueBadge } from "../components/index";
import { CgNametag } from "react-icons/cg";
import classNames from "classnames";
import { NextRequest } from "next/server";

const IssuePage = async () => {
  //adding custome delat
  // await delay(2000);
  const data = await prisma.issue.findMany();
  return (
    <div data-theme="fantasy">
      <div className="flex justify-end">
        <Link
          href="/issues/new"
          className="lg:w-1/5 w-1/2  md:w-1/5 btn btn-outline btn-primary rounded-md mx-4 my-2 capitalize"
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
              <th className="text-left font-semibold capitalize text-base">
                title
              </th>
              <th className="text-left font-semibold capitalize text-base">
                status
              </th>
              <th className="text-left font-semibold capitalize hidden lg:block md:block text-base">
                created at
              </th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {data.map((issue) => (
              <tr className="hover" key={issue.id}>
                {/* <th>{issue.id}</th> */}
                <td className="capitalize">
                  <Link href={`/issues/${issue.id}`} className='text-blue-400 hover:underline'>{issue.title}</Link>
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
      </div>
    </div>
  );
};

export default IssuePage;
