"use client";
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";

interface IssueData {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueData>();
  const [alert, setAlert] = useState<{
    type: "success" | "danger";
    message: string;
  } | null>(null);
  const router = useRouter();

  const onSubmit = async (data: IssueData) => {
    const response = await fetch("/api/issues", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setAlert({ type: "success", message: "Your issue has been created" });
      setTimeout(() => {
        router.push("/issues");
      }, 2000); // Redirect after 2 seconds
    } else {
        setAlert({ type: "danger", message: "Your issue has not been created" });
        setTimeout(() => {
          router.push("/issues");
        }, 2000); // Redirect after 2 seconds
    }
  };

  return (
    <div className="h-[35rem] p-4 w-full font-roboto" data-theme="fantasy">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="h-full w-1/2 flex flex-col">
          <input
            type="text"
            placeholder="Title "
            className="input input-bordered input-sm max-w-xl"
            {...register("title")}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <SimpleMDE
                placeholder="Description"
                {...field}
                className="mt-4"
              />
            )}
          />
          <button className="btn btn-secondary w-1/3 capitalize mt-2">
            Submit new issue
          </button>
        </div>
      </form>
      {alert && 
      
        <div
          role="alert"
          className={`alert ${
            alert.type === "success" ? "alert-success" : "alert-danger"
          } absolute top-[5rem] right-0  w-1/3 mr-[1rem]`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{alert.message}</span>
        </div>
      }
    </div>
  );
};

export default NewIssuePage;
