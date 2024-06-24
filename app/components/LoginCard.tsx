import React from "react";
import Link from "next/link";

interface Props {
  status: string;
  logo: string;
  name: string;
  email: string;
}

const LoginCard = ({ status, logo, name, email }: Props) => {

  return (
    <div className="dropdown dropdown-left mt-2">
      {status === "authenticated" && (
        <div tabIndex={0} role="button" className="rounded-full bg-none">
          <div className="avatar">
            <div className="w-12">
              <img
                src={logo}
                className="rounded-xl border border-solid border-zinc-200"
              />
            </div>
          </div>
        </div>
      )}
        <div
          tabIndex={0}
          className="dropdown-content card card-compact bg-zinc-100 text-primary-content z-[1] p-2 shadow border-none  mt-12 mr-1 w-fit"
        >
          <div className="card-body  bg-zinc-100 border-zinc-200">
            <h3 className="card-title">{name}</h3>
            <p>{email} </p>
          </div>
        </div>
    </div>
  );
};

export default LoginCard;
