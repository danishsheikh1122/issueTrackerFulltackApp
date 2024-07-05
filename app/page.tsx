import React from "react";
import LatestIssue from "./alldashboardCMP/LatestIssue";
import IssueSummary from "./alldashboardCMP/IssueSummary";
import IssueBarChart from "./alldashboardCMP/IssueBarChart";
import prisma from "@/prisma/client";
import { Metadata } from "next";

const HomePage = async () => {
  const closed_issues = await prisma.issue.count({
    where: { status: "CLOSED" },
  });
  const open_issues = await prisma.issue.count({
    where: { status: 'OPEN' },
  });
  const inprog_issues = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });

  return (
    <div className="w-full lg:flex lg:space-x-4 sm:block sm:space-y-4">
      <div className="lg:w-1/2 sm:w-full">
        <div className="w-full flex justify-between items-center">
          <IssueSummary open={open_issues} closed={closed_issues} in_progress={inprog_issues} />
        </div>
        <div className="px-4 mt-4">
          <IssueBarChart open={open_issues} closed={closed_issues} in_progress={inprog_issues} />
        </div>
      </div>
      <div className="lg:w-1/2 sm:w-full mt-2">
        <LatestIssue />
      </div>
    </div>
  );
};

export const metadata:Metadata ={
  title: "Issue Tracker - Dashboard",
  description: "A simple bug tracker application for managing and tracking software issues.",
}


export default HomePage;
