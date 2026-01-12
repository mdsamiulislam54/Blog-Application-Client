"use client";
import GetUser from "@/hook/useSession/useSession";

export default function Home() {
    const user = GetUser();
  return (
   <div className="grid grid-cols-3">
   
    <p className="text-[5vw] font-bold text-center">{user?.id} </p>
    

   </div>
  );
}
