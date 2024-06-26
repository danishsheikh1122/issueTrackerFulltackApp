import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { assignToSchema } from "../schema";
import ProviderObject from "@/app/auth/ProviderObjext";
import { getServerSession } from "next-auth";
import { isDataView } from "util/types";
interface Params {
  params: { id: string };
}

// patch to update one or more fileds
export async function PATCH(req: NextRequest, { params: { id } }: Params) {
  // const session = await getServerSession(ProviderObject);
  // if (!session)
  //   return NextResponse.json({ message: "login first" }, { status: 401 }); //if we dont have session then return unauthorized
  const intId = parseInt(id);
  const body = await req.json();
  const isValidate = assignToSchema.safeParse(body); //parsing with new schema that we just created
  if (!isValidate.success)
    return NextResponse.json(isValidate.error.errors, { status: 404 });

  //assign to useId validation
  const { assignToUserId, title, description } = body;
  if (assignToUserId) {
    const user = await prisma.user.findUnique({
      where: { id: assignToUserId },
    });

    if (!user)
      return NextResponse.json({ status: 400, error: "user not found" });
  }
  const issuePresent = await prisma.issue.findUnique({ where: { id: intId } });
  if (!issuePresent)
    return NextResponse.json({ status: 404, error: "user not found" });
  const updateIssue = await prisma.issue.update({
    where: {
      id: intId,
    },
    data: {
      title,
      description,
      assignToUserId,
    },
  });
  
  // const updateIssue: {
    //   title?: string;
    //   description?: string;
    //   assignToUserId?: string | null;
    // } = {
  //   title,
  //   description,
  //   assignToUserId,
  // };
  // const responseData = {
  //   id: updateIssue.id,
  //   title: updateIssue.title,
  //   description: updateIssue.description,
  //   assignToUserId: updateIssue.assignToUserId,
  //   status: updateIssue.status,
  //   createdAt: updateIssue.createdAt,
  //   updatedAt: updateIssue.updatedAt,
  // };

  return NextResponse.json({ status: 200, data: updateIssue });
  // return NextResponse.json({ status: 200, data: responseData });
}

export async function DELETE(req: NextRequest, { params: { id } }: Params) {
  const session = await getServerSession(ProviderObject);
  if (!session)
    return NextResponse.json({ message: "login first" }, { status: 401 }); //if we dont have session then return unauthorized

  const intId = parseInt(id);
  const issuePresent = await prisma.issue.findUnique({ where: { id: intId } });
  if (!issuePresent)
    return NextResponse.json({ status: 404, error: "user not found" });
  const deleteIssue = await prisma.issue.delete({
    where: {
      id: intId,
    },
  });
  return NextResponse.json({
    status: 200,
    message: "issue deleted successfully",
  });
}
