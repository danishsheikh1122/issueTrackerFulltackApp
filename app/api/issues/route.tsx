import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";
export async function POST(req: NextRequest) {
  const data = await req.json();
  const isValid = schema.safeParse(data);
  if (!isValid.success) {
    return NextResponse.json(isValid.error.errors, { status: 400 });
  }
  const newIssue = await prisma.issue.create({
    data: {
      title: data.title,
      description: data.description,
    },
  });
  return NextResponse.json({
    status: 201,
    data: newIssue,
    message: "Issue Created",
  });
}
