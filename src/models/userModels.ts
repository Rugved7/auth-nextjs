import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Provide a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please Provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Provide a password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },

  // For Password things that prpbably comes under JWT protection 
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  verifyToken: String,
  verifyExpires: Date,
});

// In nextjs there ia a catch on how we export Mongoose UserSchema

const User = mongoose.models.users || mongoose.model("users",userSchema);
export default User;

// So code on const User = ... tells that if the users model is already present then load that else load the new one
