import { authClient } from "@/lib/auth-client"

const GetUser = ()=>{
    const session =  authClient.useSession();
    return session.data?.user;
}

export default GetUser;