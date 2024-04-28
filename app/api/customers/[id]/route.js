import { connToDB } from "@/libs/connToDB";
import customer from "@/models/customer";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newname:name,
    newphonenumber:phoneNumber,
    newamount:amount,
    newcommand:command,
  
  } = await request.json();
  const _id = id
  await connToDB();
  await customer.findByIdAndUpdate(_id, { name,phoneNumber,amount,command });
  return NextResponse.json({ message: "customer updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connToDB();
  const topic = await customer.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
