'use server'

import { connectMongoDB } from "@/config/database";
import UserModel from "@/models/user-model";
import { currentUser } from "@clerk/nextjs/server"

connectMongoDB();

export const getCurrentUserFromMongoDB = async () => {
  try {
    // get the clerk user data
    const clerkUser = await currentUser();
    const clerkId = clerkUser?.id;
    // check the user is exist in the database, if yes, return the user data
    const user = await UserModel.findOne({ clerkId });
    if (user) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(user))
      }
    }
    // if no, create a new user in the database and return the user data
    const userObj = {
      clerkId,
      name: clerkUser?.firstName + ' ' + clerkUser?.lastName,
      email: clerkUser?.emailAddresses[0].emailAddress,
      profilePictureUrl: clerkUser?.imageUrl,
      profileDataResume: {}
    }
    const newUser = new UserModel(userObj);
    newUser.save();
    return {
      success: true,
      data: JSON.parse(JSON.stringify(newUser))
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message
    }
  }
}