
import { authClient } from "@/lib/auth-client"

const getUser = ()=>{
    const session =  authClient.useSession();
    console.log(session)
    return session.data?.user;
}

export default getUser;