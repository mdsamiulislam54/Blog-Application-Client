"use client";
import Banner from "@/components/page/Banner/Banner";
import GetUser from "@/hook/useSession/useSession";

export default function Home() {
  const user = GetUser();
  return (
    <div>
      <Banner />
    </div>
  );
}
