// Here we will create the api and routes for the User to Signed up

import { connect } from "@/dbConfig/dbconfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server"; // req, res is handeled this way in next js
import bcryptjs from "bcryptjs";
connect();

// As it is a Signup process and data is coming to us , therefore it is a POST request
export async function POST(request: NextRequest) {
  try {
    // How to handle the POST request
    const reqBody = await request.json();
    // Now extract everything from the request body what we'll be getting
    const { username, email, password } = reqBody;

    // check if the user already exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // As making this amount of projects we know that there are mmore ways of validation and ofcourse we will use that in upcoming projects but this time only validate email

    // Hashing the Password using Bcryptjs
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the new user
    const savedUser = await newUser.save();

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 }); // Respond in JSON format with status code 500
  }
}
