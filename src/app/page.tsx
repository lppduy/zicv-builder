import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "antd";
export default async function Home() {
  const user = await currentUser();
  const name = user?.firstName +' '+ user?.lastName;
  const email = user?.emailAddresses[0].emailAddress;
  const clerkUserId = user?.id;
  console.log(user);
  return (
    <div className="p-5 flex flex-col gap-5 items-start">
      <h1 className="text-3xl">
        ZiCV Builder
      </h1>
      <UserButton />
      <h1>Name: {name}</h1>
      <h1>Email: {email}</h1>
      <h1>Clerk User ID: {clerkUserId}</h1>
    </div>
  );
}
