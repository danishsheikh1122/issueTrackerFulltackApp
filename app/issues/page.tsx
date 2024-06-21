"use client";
import React from "react";

const IssuePage = () => {
  return (
    <div className="h-[15rem] p-4 w-full">
      <div className="h-full w-1/2 flex flex-col justify-evenly">
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered input-sm max-w-xl"
        />
        <textarea
          placeholder="Description"
          className="textarea textarea-bordered textarea-sm w-full max-w-xl resize-none"
        ></textarea>
        <button className="btn btn-primary w-1/3 capitalize">submit new issue</button>
      </div>
    </div>
  );
};

export default IssuePage;
