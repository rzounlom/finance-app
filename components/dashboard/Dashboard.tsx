import Navbar from "../navbar/Navbar";
import { createNewUser } from "@/utils/actions/auth";

export default async function Dashboard() {
  await createNewUser();
  return (
    <div>
      <h1>Dashboard</h1>
      <Navbar />
    </div>
  );
}
