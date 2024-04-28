import customer from "@/models/customer";
import { NextResponse } from "next/server";
import { connToDB } from "@/libs/connToDB";


export async function POST(request) {
  const { name,
    phoneNumber,
    amount,
    command
  
  } = await request.json();
  await connToDB();
  await customer.create({ name,
    phoneNumber,
    amount,
    command
  
  });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  await connToDB();
  const customerdb = await customer.find();
  return NextResponse.json({customerdb});
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connToDB();
  await customer.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
