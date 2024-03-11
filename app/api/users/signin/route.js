import { Connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

Connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log(reqBody);

    //check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({
        error: "User does not exist",
        status: 400,
      });
    }
    //check if password is correct
    const valiidPassword = await bcryptjs.compare(password, user.password);

    if (!valiidPassword) {
      return NextResponse.json({
        error: "Invalid Password",
        status: 400,
      });
    }
    const tokenData = {
      id: user._id,
      email: user.email,
      password: user.password,
    };
    //create token
    const token = await jwt.sign(tokenData, "Jwt secrect key!", {
      expiresIn: "1h",
    });
    const response = NextResponse.json({
      message: "Login Successfull",
      success: true,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      status: 500,
    });
  }
}
