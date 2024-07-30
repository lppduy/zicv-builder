import { getCurrentUserFromMongoDB } from "@/server-actions/users";
import { UserButton } from "@clerk/nextjs";


export default async function Home() {
  const response = await getCurrentUserFromMongoDB();
  if (!response.success) {
    return <div>{response.message}</div>
  }
  const user = response.data;
  const { name, email, clerkId, _id } = user;
  console.log(user);
  return (
    <div className="p-5 flex flex-col gap-5 items-start">
      <h1 className="text-3xl">
        ZiCV Builder
      </h1>
      <UserButton />
      <h1>Name: {name}</h1>
      <h1>Email: {email}</h1>
      <h1>Clerk User ID: {clerkId}</h1>
      <h1>MongoDB UserID: {_id}</h1>
    </div>
  );
}
