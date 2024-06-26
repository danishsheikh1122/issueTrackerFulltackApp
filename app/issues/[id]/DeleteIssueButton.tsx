"use client";
import React, { useState } from "react";
import ConfirmDeleteDialogbox from "./ConfirmDeleteDialogbox";
interface Props {
  id: number;
}
const DeleteIssueButton = ({ id }: Props) => {
  const [toDelete, setToDelete] = useState(false);
  return (
    <div>
      {toDelete && <ConfirmDeleteDialogbox id={id} />}
      {!toDelete && (
        <button
          className="btn btn-outline px-6 capitalize rounded-xl w-[55%] mt-2 text-red-500 hover:bg-red-500 hover:border-none"
          onClick={() => {
            setToDelete(true);
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
      )}
    </div>
  );
};

export default DeleteIssueButton;
