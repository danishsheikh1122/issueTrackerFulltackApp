import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    const clients=await prisma.user.findMany({//here use User schema defined in prisma to get name in asc order 
      orderBy: {
       name:'asc', // Replace 'name' with the field you want to order by
      },
      
    })
  if(!clients) return NextResponse.json({status:404})
  return NextResponse.json({status:200,body:clients});
  }