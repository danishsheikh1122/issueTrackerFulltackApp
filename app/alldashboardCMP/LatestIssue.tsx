
import prisma from "@/prisma/client";
import Link from "next/link";
import React from "react";
import { IssueBadge } from "../components";
import {useRouter} from "next/navigation";

const LatestIssue = async () => {
  // const router=useRouter()
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    include: { assignToUser: true },
  });

  
  return (
    <div className=" mt-6 mb-4 mx-4 border border-solid border-zinc-200 rounded-md">
      <table className="table ">
        <tbody>
          {/* rows */}
          {issues.map((issue) => (
            <tr className="hover" key={issue.id}>
              {/* <th>{issue.id}</th> */}
              <td className="capitalize block pb-0">
                <Link
                  href={`/issues/${issue.id}`}
                  className="text-blue-400 hover:underline"
                >
                  {issue.title}
                </Link>
              </td>
              <td className="block pt-2">
                <IssueBadge status={issue.status}></IssueBadge>
              </td>
              {issue.assignToUser && (
                <td>
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img src={issue.assignToUser.image!} alt='image not found' />
                    </div>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatestIssue;
