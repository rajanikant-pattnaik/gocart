import connectDb from "@/connect";
import { NextResponse, NextRequest } from "next/server";
import productDb from "@/models/product";

connectDb();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { productName, AdminId, photo, description, productType, qty } =
      reqBody;

    const user = await productDb.findOne({ AdminId, productName });
    if (user) {
      return NextResponse.json(
        { error: "Product already added by the admin" },
        { status: 400 }
      );
    }
    const newProduct = new productDb({
      productName,
      AdminId,
      photo,
      description,
      productType,
      qty,
      createdAt: Date.now(),
    });
    const savedProduct = await newProduct.save();
    return NextResponse.json({
      message: `Product is added successfully by the admin ${AdminId}`,
      success: true,
      savedProduct,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
