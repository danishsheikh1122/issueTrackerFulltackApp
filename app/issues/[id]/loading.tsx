import React from "react";
import Skeleton from '@/app/components//Skeleton'
const Loadingcmp = () => {
  return (
    <>
      <div className="mt-8 ml-6 ">
        <h1 className="text-xl font-bold mb-2 capitalize w-1/2">
          <Skeleton />
        </h1>
        <div className="flex gap-4 items-center ">
          <span className="w-[5rem]">
            <Skeleton />
          </span>
          <span className="w-[5rem]">
            <Skeleton />
          </span>
        </div>
        <div className="prose  border border-solid border-zinc-300 w-1/2 h-auto p-4 mt-4 rounded-md capitalize">
          <Skeleton count={3}/>
        </div>
      </div>
    </>
  );
};

export default Loadingcmp;
