// components/AssignTocmp.tsx
"use client";
import { useQuery } from "@tanstack/react-query";
import { User } from "next-auth";
import React from "react";
import axios from "axios";
import Skeleton from "@/app/components/Skeleton";

interface UserResponse {
  status: number;
  body: User[];
}

const AssignTocmp: React.FC = () => {
  const { data, error, isLoading } = useQuery<UserResponse, Error>({
    queryKey: ['users'],
    queryFn: () => axios.get('/api/users').then((res) => res.data),
    staleTime: 60 * 1000, // 60 seconds
    retry: 3
  });

  if (isLoading) return <Skeleton />;
  if (error) return <div>Error loading users</div>;

  // console.log(data?.body);

  return (
    <select className="select select-bordered max-w-xs rounded-lg w-[70%]" defaultValue="">
      <option disabled value="">
        Who shot first?
      </option>
      {data?.body?.map((clientsData) => (
        <option className="text-black" value={clientsData.name!} key={clientsData.id!}>
          {clientsData.name}
        </option>
      ))}
    </select>
  );
};

export default AssignTocmp;
