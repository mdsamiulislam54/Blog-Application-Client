
import Banner from "@/components/page/Banner/Banner";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  
  const session = await fetch(`${process.env.BACKEND_URL}/api/auth/get-session`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore.toString()
    },
    cache: "no-store",
    credentials: "include",
  }).then((res) => res.json());
  console.log("Home page session", session)
  return (
    <div>
      <Banner />
    </div>
  );
}
