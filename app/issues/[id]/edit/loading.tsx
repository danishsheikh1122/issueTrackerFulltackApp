import React from "react";
import Skeleton from "@/app/components//Skeleton";
const Loadingcmp = () => {
  return (
    <>
      <div className="h-[35rem] p-4 w-full" data-theme="fantasy">
        <form>
          <div className="h-full w-1/2 flex flex-col">
            <div className="mb-4 w-full">
              <div
                className="input input-bordered input-sm w-full"
              >
              <Skeleton />
              </div>
            </div>
            <div className="mb-4">
              <div className="mt-4 p-4 border border-solid border-zinc-300 rounded-lg">
                <Skeleton count={10} />
              </div>
            </div>
            <div className="w-1/3 capitalize mt-2">
              <Skeleton/>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Loadingcmp;
