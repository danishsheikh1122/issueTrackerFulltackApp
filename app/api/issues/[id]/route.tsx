import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import schema from "../schema";
interface Params {
  params: { id: string };
}

// patch to update one or more fileds
export async function PATCH(req: NextRequest, { params: { id } }: Params) {
  const intId = parseInt(id);
  const body = await req.json();
  const isValidate = schema.safeParse(body);
  if (!isValidate.success)
    return NextResponse.json(isValidate.error.errors, { status: 404 });
  const issuePresent = await prisma.issue.findUnique({ where: { id: intId } });
  if (!issuePresent)
    return NextResponse.json({ status: 404, error: "user not found" });
  const updateIssue = await prisma.issue.update({
    where: {
      id: intId,
    },
    data: {
      title: isValidate.data.title,
      description: isValidate.data.description,
    },
  });

  return NextResponse.json({ status: 200, data: updateIssue });
}
