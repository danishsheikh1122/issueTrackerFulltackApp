import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";
const loading = () => {
  const data = [1, 2, 3, 4, 5];
  return (
    <div data-theme="fantasy">
      <div className="flex justify-end">
        <Link
          href="#"
          className="lg:w-1/5 w-1/2  md:w-1/5 btn btn-outline btn-primary rounded-md mx-4 my-2 capitalize"
        >
          create new issue
        </Link>
      </div>
      <div className="overflow-x-auto mb-4 mx-4 border border-solid border-zinc-200 rounded-md">
        <table className="table ">
          {/* head */}
          <thead className="bg-gray-300">
            <tr>
              {/* <th className="text-left font-semibold">#</th> */}
              <th className="text-left font-semibold capitalize text-lg">title</th>
              <th className="text-left font-semibold capitalize text-lg">status</th>
              <th className="text-left font-semibold capitalize hidden lg:block md:block text-lg">
                created at
              </th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {data.map((issue) => (
              <tr className="hover">
                {/* <th>{issue.id}</th> */}
                <td className="capitalize">
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td className="hidden lg:block md:block">
                  <Skeleton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default loading;
