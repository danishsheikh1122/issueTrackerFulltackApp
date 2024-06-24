"use client";
import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
interface Props {
  id: number;
}
const DeleteIssueButton = ({ id }: Props) => {
  const router = useRouter();
  const handelDeleteEvent = async () => {
    const isDeleted = await fetch(`/api/issues/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    if (!isDeleted) {
      return notFound();
    } else {

        router.push("/issues");
        router.refresh();
    }
  };

  return (
    <div>
      <button
        className="btn btn-outline px-6 capitalize rounded-xl w-[55%] mt-2 text-red-500 hover:bg-red-500 hover:border-none"
        onClick={() => {
          handelDeleteEvent();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#D4D4D4"
        >
          <path d="M200-440v-80h560v80H200Z" />
        </svg>
        Delete Issue
      </button>
    </div>
  );
};

export default DeleteIssueButton;
