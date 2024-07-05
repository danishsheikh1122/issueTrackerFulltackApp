import React from 'react'
import LatestIssue from './alldashboardCMP/LatestIssue'
import IssueSummary from './alldashboardCMP/IssueSummary'
const homePage = () => {
  return (
    <div>
      <IssueSummary open={10} closed={5} in_progress={5} />
      <LatestIssue/>
    </div>
  )
}

export default homePage
