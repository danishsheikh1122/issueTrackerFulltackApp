import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import ProviderObject from "@/app/auth/ProviderObjext";
export async function POST(req: NextRequest) {
  const data = await req.json();
  const isValid = schema.safeParse(data);
  const session = await getServerSession(ProviderObject);
  if (!session) return NextResponse.json({message:"login first"},{ status: 401 }); //if we dont have session then return unauthorized
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
