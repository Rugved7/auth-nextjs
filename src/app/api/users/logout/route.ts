// To logout means to simply clear the tokens
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // create a responce which will remove the token
    const response = NextResponse.json({
      message: "Logout Successfull",
      success: true,
    });
    // This response will interact with the cookie
    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
    return response;
    
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
