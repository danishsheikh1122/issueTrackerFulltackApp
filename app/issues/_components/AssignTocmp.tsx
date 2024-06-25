// components/AssignTocmp.tsx
"use client";
import { User } from "next-auth";
import React, { useEffect, useState } from "react";
const AssignTocmp: React.FC = () => {
  //geting clients data
  const [clientsData, setClientsData] = useState<User[]>();//we are directly accessing User schema modal from prisma/schema
  console.log(clientsData);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3000/api/users");
      const {body} = await data.json();
      setClientsData(body);
    };
    fetchData();
  }, []);
  return (
    <select className="select select-bordered max-w-xs rounded-lg w-[70%]">
      <option disabled selected defaultValue={"Who shot first?"}>
        Who shot first?
      </option>
      {clientsData?.map(clientsData =><option className="text-black" value={clientsData.name!} key={clientsData.id!}>{clientsData.name}</option>)}
    </select>
  );
};

export default AssignTocmp;
 