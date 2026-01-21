
import Banner from "@/components/page/Banner/Banner";
import { authClient } from "@/lib/auth-client";




export default async function Home() {
  const session = await authClient.getSession();
  console.log("Home page session", session)
  return (
    <div>
      <Banner />
    </div>
  );
}
