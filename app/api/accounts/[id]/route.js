import { connToDB } from "@/libs/connToDB";
import customer from "@/models/customer";
import supplier from "@/models/supplier";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  await connToDB();
  const custdbs = await customer.find();
  const suppdbs = await supplier.find();
  console.log(params);
  let ArrayCustomer = custdbs.filter(custdb => custdb.phoneNumber==id);
  let ArraySupplier  = suppdbs.filter(suppdb => suppdb.phoneNumber==id);
  const topic = await Topic.findOne({ number: id});
  return NextResponse.json({ topic, CustomerArray: ArrayCustomer, supplierArray: ArraySupplier }, { status: 200 });
}
