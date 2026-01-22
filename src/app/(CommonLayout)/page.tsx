
import Banner from "@/components/page/Banner/Banner";
import { userSession } from "@/services/user.service";


export default async function Home() {
  const session = await userSession.getSession();
  return (
    <div>

      {JSON.stringify(session)}
      <Banner />
    </div>
  );
}
