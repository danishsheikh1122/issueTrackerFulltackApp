import React from "react";
interface Props {
  status: string;
}
const IssueBadge = ({ status }: Props) => {
  let className = "";
  let textColor = "";

  switch (status) {
    case "OPEN":
      className = "bg-green-200";
      textColor = "text-green-400";
      break;
    case "IN_PROGRESS":
      className = "bg-purple-200";
      textColor = "text-purple-400";
      break;
    case "CLOSED":
      className = "bg-red-200";
      textColor = "text-red-400";
      break;
    default:
      className = "bg-gray-200";
      textColor = "text-gray-400";
      break;
  }

  return (
    <div className={`badge border-none ${className} ${textColor} rounded-md`}>
      {status}
    </div>
  );
};

export default IssueBadge;
