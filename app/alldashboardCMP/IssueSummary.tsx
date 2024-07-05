import { Status } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface Props {
  open: number;
  in_progress: number;
  closed: number;
}
const IssueSummary = ({ open, in_progress, closed }: Props) => {
  //adding type safety
  const container:{
    label:string,
    value:number,
    status:Status
  }[] = [
    {
      label: "OPEN",
      value: open,
      status: "OPEN",
    },
    {
      label: "CLOSED",
      value: closed,
      status: "CLOSED",
    },
    {
      label: "IN_PROGRESS",
      value: in_progress,
      status: "IN_PROGRESS",
    },
  ];
  return <div className="flex lg:flex lg:w-1/2 gap-2 mx-4 mt-4 text-zinc-400">
    {container.map((status)=>{
        return <div key={status.label} className={`flex-row flex-1 p-2 text-center border-2 border-${status.status}-400 rounded-lg mt-4 lg:h-fit h-fit`}>
          <span>{status.label}</span>
          <div className="text-xl font-bold text-black mx-1 hover:text-zinc-400 ">
            <Link href={`/issues?filterBy=${status.label}`}>
             { status.value}
            </Link>
             </div>
        </div>
  
    })}

  </div>;
};

export default IssueSummary;
