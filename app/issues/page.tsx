import React from "react";
import Link from "next/link";
import prisma from "@/prisma/client";
//adding custome delay
import delay from 'delay'
const IssuePage = async () => {
//adding custome delat
  await delay(2000)
  const data = await prisma.issue.findMany();
  return (
    <div data-theme="fantasy">
      <div className="flex justify-end">
      <Link href="/issues/new" className="lg:w-1/5 w-1/2  md:w-1/5 btn btn-outline btn-primary rounded-md mx-4 my-2 capitalize">
        create new issue
      </Link>
      </div>
      <div className="overflow-x-auto mb-4 mx-4 border border-solid border-zinc-200 rounded-md">
        <table className="table ">
          {/* head */}
          <thead className="bg-gray-300">
            <tr>
              {/* <th className="text-left font-semibold">#</th> */}
              <th className="text-left font-semibold capitalize">title</th>
              <th className="text-left font-semibold capitalize">status</th>
              <th className="text-left font-semibold capitalize hidden lg:block md:block">created at</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {data.map((issue) => (
              <tr className="hover" key={issue.id}>
                {/* <th>{issue.id}</th> */}
                <td className="capitalize">{issue.title}</td>
                <td>
                  {issue.status==="OPEN" && <div className=" badge border-none bg-green-200 text-green-400  rounded-md">{issue.status}</div>}
                  {issue.status==="IN_PROGRESS" && <div className=" badge border-none bg-purple-200 text-purple-400   rounded-md">{issue.status}</div>}
                  {issue.status==="CLOSED" && <div className=" badge border-none bg-red-200 text-red-400 rounded-md">{issue.status}</div>}
                </td>
                <td className="hidden lg:block md:block">{issue.createdAt.toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssuePage;
