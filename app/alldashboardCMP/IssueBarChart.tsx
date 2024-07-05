'use client'
import React from "react";
import { ResponsiveContainer, XAxis, YAxis, BarChart, Bar } from "recharts";
interface Props {
  open: number;
  in_progress: number;
  closed: number;
}

const IssueBarChart = ({ open, in_progress, closed }: Props) => {
  const container: {
    label: string;
    value: number;
  }[] = [
    {
      label: "OPEN",
      value: open,
    },
    {
      label: "IN_PROGRESS",
      value: in_progress,
    },
    {
      label: "CLOSED",
      value: closed,
    },
  ];
  return (
      <ResponsiveContainer width="50%" height={300} className=''>
        <BarChart data={container}> 
          <XAxis dataKey="label" />
          <YAxis />
          <Bar dataKey="value" fill="#8884d8" barSize={40}/>
        </BarChart>
      </ResponsiveContainer>
  );
};

export default IssueBarChart;
