import Navbar from "../navbar/Navbar";
import { createNewUser } from "@/utils/actions/auth";

export default async function Overview() {
  await createNewUser();
  return (
    <div>
      <h1>Overview</h1>
      <Navbar />
    </div>
  );
}
