import React from "react";
import LatestIssue from "./alldashboardCMP/LatestIssue";
import IssueSummary from "./alldashboardCMP/IssueSummary";
import IssueBarChart from "./alldashboardCMP/IssueBarChart";
import prisma from "@/prisma/client";

const HomePage = async () => {
  const closed_issues = await prisma.issue.count({
    where: { status: "CLOSED" },
  });

  return (
    <div className="w-full lg:flex lg:space-x-4 sm:block sm:space-y-4">
      <div className="lg:w-1/2 sm:w-full">
        <div className="w-full flex justify-between items-center">
          <IssueSummary open={10} closed={closed_issues} in_progress={5} />
        </div>
        <div className="px-4 mt-4">
          <IssueBarChart open={10} closed={closed_issues} in_progress={5} />
        </div>
      </div>
      <div className="lg:w-1/2 sm:w-full mt-2">
        <LatestIssue />
      </div>
    </div>
  );
};

export default HomePage;
