import topic from "@/models/topic";

import { NextResponse } from "next/server";
import { connToDB } from "@/libs/connToDB";



export async function POST(request) {
  const  {
    name,
    number,
  
  } = await request.json();
  await connToDB();
  await topic.create({ name,
    number,

  });
  return NextResponse.json({ message: "Account Created" }, { status: 201 });
}

export async function GET() {
  await connToDB();
  const AllAccounts = await topic.find();
  return NextResponse.json({AllAccounts});
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("number");
  await connToDB();
  await topic.findByIdAndDelete(number);
  return NextResponse.json({ message: "Account deleted" }, { status: 200 });
}
