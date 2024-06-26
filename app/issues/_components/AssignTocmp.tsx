'use client'
import Skeleton from "@/app/components/Skeleton";
import { Issue } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { User } from "next-auth";
import React, { useEffect, useState } from "react";

interface UserResponse {
  status: number;
  body: User[];
}






const AssignTocmp = ({ issueData }: { issueData: Issue }) => {
  const { data, error, isLoading } = useUsers
  const [selectedUserId, setSelectedUserId] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (issueData.assignToUserId && data?.body) {
      setSelectedUserId(issueData.assignToUserId.toString());
    }
  }, [issueData.assignToUserId, data?.body]);

  if (isLoading) return <Skeleton />;
  if (error) return <div>Error loading users</div>;

  const handleAssigneeChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const userId = event.target.value;
    setSelectedUserId(userId);

    try {
      const response = await fetch(`/api/issues/${issueData.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ assignToUserId: userId || null }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Optionally handle success response here
      console.log(`Assignee updated successfully for issue ${issueData.id}`);
    } catch (error) {
      console.error("Error updating assignee:", error);
    }
  };

  return (
    <select
      className="select select-bordered max-w-xs rounded-lg w-[70%]"
      value={selectedUserId || ""}
      onChange={handleAssigneeChange}
    >
      <option disabled value="">
        AssignIssue
      </option>
      <option value="" className="font-semibold">Click to Unassigne Issue</option>
      {data?.body?.map((userData) => (
        <option
          className="text-black"
          value={userData.id.toString()}
          key={userData.id}
        >
          {userData.name}
        </option>
      ))}
    </select>
  );
};

const useUsers= useQuery<UserResponse, Error>({
  queryKey: ["users"],
  queryFn: () => axios.get("/api/users").then((res) => res.data),
  staleTime: 60 * 1000, // 60 seconds
  retry: 3,
});

export default AssignTocmp;
