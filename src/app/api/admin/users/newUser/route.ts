import connectDb from "@/connect";
import { NextResponse, NextRequest } from "next/server";
import AdminUser from "@/models/adminUser";
import bcrypt from "bcrypt";

connectDb();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    const user = await AdminUser.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "User admin already exist" },
        { status: 400 }
      );
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newAdminUser = new AdminUser({
      username,
      email,
      password: hashedPassword,
      createdAt: Date.now(),
    });
    const savedUser = await newAdminUser.save();
    return NextResponse.json({
      message: "User admin is created successfully",
      success: true,
      savedUser,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
