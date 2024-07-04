"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}
const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  const changePage = (page: number) => {
    if (page >= pageSize) currentPage = pageSize;
    const param = new URLSearchParams(searchParams);
    param.set("page", page.toString());
    router.push("?" + param.toString());
  };

  return (
    <div className="join items-center gap-2 mr-4">
      <button
        className="btn"
        disabled={currentPage === 1}
        onClick={() => changePage(1)}
      >
        «
      </button>
      <button
        className=" btn"
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous page
      </button>
      <span className=" ">
        Page {currentPage} of {pageCount}
      </span>
      <button
        className="btn"
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === pageCount}
      >
        Next
      </button>
      <button
        className="btn"
        disabled={currentPage === pageCount}
        onClick={() => changePage(pageCount)}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
