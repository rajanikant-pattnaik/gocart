import connectDb from "@/connect";
import { NextResponse, NextRequest } from "next/server";
import AdminUser from "@/models/adminUser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

connectDb();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    const user = await AdminUser.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          error: "user admin dosent exist",
        },
        { status: 400 }
      );
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        {
          error: "Password is incorrect",
        },
        { status: 401 }
      );
    }
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
      userType: user.userType,
    };
    //create Token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });
    const response = NextResponse.json({
      message: "Login Successfully",
      success: true,
      tokenData,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
