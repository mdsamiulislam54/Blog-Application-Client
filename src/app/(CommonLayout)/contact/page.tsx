
"use client"

import getUser from "@/hooks/useSession/useSession"
import Image from "next/image"

export default function Contact() {
  const data = getUser()
  return (
    <div className='text-[8vw] font-bold flex flex-col gap-5'>
      <Image src={data?.image || ""} alt="User Image" width={100} height={100}
        className="w-100 h-100"
      />
      <p>  {data?.name}</p>
      <p>  {data?.email}</p>
      <p> {data?.id}</p>




    </div>
  )
}
