import React from "react";
import Link from "next/link";
const IssuePage = () => {
  return (
    <div>
      <Link href="/issues/new" className="btn btn-primary">
        NewIssue
      </Link>
    </div>
  );
};

export default IssuePage;
