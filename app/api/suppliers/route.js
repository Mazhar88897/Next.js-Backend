import supplier from "@/models/supplier";
import { NextResponse } from "next/server";
import { connToDB } from "@/libs/connToDB";


export async function POST(request) {
  const { name,
    phoneNumber,
    amount,
    command
  
  } = await request.json();
  await connToDB();
  await supplier.create({ name,
    phoneNumber,
    amount,
    command
  
  });
  return NextResponse.json({ message: "supplier Created" }, { status: 201 });
}

export async function GET() {
  await connToDB();
  const supplierdb = await supplier.find();
  return NextResponse.json({supplierdb});
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connToDB();
  await supplier.findByIdAndDelete(id);
  return NextResponse.json({ message: "supplier deleted" }, { status: 200 });
}
