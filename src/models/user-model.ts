import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profilePictureUrl: {
    type: String,
    required: true,
  },
  profileDataResume: {
    type: Object,
    required: false
  }
},{timestamps:true});

if (mongoose.models && mongoose.models.users) {
  delete mongoose.models.users;
}

const UserModel = mongoose.model("users", userSchema);
export default UserModel;