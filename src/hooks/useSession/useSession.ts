
import { authClient } from "@/lib/auth-client"

const getUser = ()=>{
    const session =  authClient.useSession();
    return session.data?.user;
}

export default getUser;