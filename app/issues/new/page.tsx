"use client";
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const newIssuePage = () => {
  return (
    <div className="h-[35rem] p-4 w-full font-roboto" data-theme="fantasy">
      <div className="h-full w-1/2 flex flex-col">
        <input
          type="text"
          placeholder="Title"
          className=" input input-bordered input-sm max-w-xl"
        />
        <SimpleMDE placeholder="Description" className="mt-4" />
        <button className=" btn btn-secondary w-1/3 capitalize mt-2"
        onClick={()=>{}}>

          submit new issue
        </button>
      </div>
    </div>
  );
};
export default newIssuePage;
