import React from "react";
import Skeleton from "@/app/components//Skeleton";
const IssueFormLoading = () => {
  return (
    <>
      <div className="h-[35rem] p-4 w-full" data-theme="fantasy">
        <form>
          <div className="h-full w-1/2 flex flex-col">
            <div className="mb-4 w-full">
              <div
                className="w-full"
              >
              <Skeleton className="w-full h-[3rem] " />
              </div>
            </div>
            <div className="mb-4">
              <div className="mt-4 rounded-lg">
                <Skeleton className="h-[25rem] w-full"/>
              </div>
            </div>
            <div className="w-1/3 capitalize mt-2">
              <Skeleton className="w-full h-[2rem]"/>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default IssueFormLoading;
