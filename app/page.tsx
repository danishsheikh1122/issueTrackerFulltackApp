import React from 'react'
import LatestIssue from './alldashboardCMP/LatestIssue'
import IssueSummary from './alldashboardCMP/IssueSummary'
import IssueBarChart from './alldashboardCMP/IssueBarChart'
const homePage = () => /* prisma.issue.count({where:})*/ (
  <div>
    <IssueSummary open={10} closed={5} in_progress={5} />
    <IssueBarChart open={10} closed={5} in_progress={5} />
    <LatestIssue />
  </div>
)

export default homePage
