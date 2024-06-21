import React from "react";
import Link from "next/link";
import prisma from "@/prisma/client";
const IssuePage = async () => {
  const data = await prisma.issue.findMany();
  return (
    <div data-theme="fantasy">
      <div className="flex justify-end">
      <Link href="/issues/new" className="lg:w-1/5 w-1/2  md:w-1/5 btn btn-outline btn-primary rounded-md mx-4 my-2 capitalize">
        create new issue
      </Link>
      </div>
      <div className="overflow-x-auto mb-4 mx-4 border border-solid border-zinc-100 rounded-md">
        <table className="table ">
          {/* head */}
          <thead className="bg-gray-300">
            <tr>
              {/* <th className="text-left font-semibold">#</th> */}
              <th className="text-left font-semibold capitalize">title</th>
              <th className="text-left font-semibold capitalize">status</th>
              <th className="text-left font-semibold capitalize">created at</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {data.map((issue) => (
              <tr className="hover" key={issue.id}>
                {/* <th>{issue.id}</th> */}
                <td className="capitalize">{issue.title}</td>
                <td>{issue.status}</td>
                <td>{issue.createdAt.toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssuePage;
