import { signOut } from "@/api/sign-Out";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
type ErrorResponse = {
    message: string;
};
const useSignOut = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: signOut,

        onSuccess(res) {
            toast.success("Sign out successful!");
            router.push("/");
            console.log(" Sign out successful", res.data);

        },
        onError(error: AxiosError<ErrorResponse>) {
            console.error("Sign out error:", error.response?.data.message || error.message);
            toast.error(`Sign out failed: ${error.response?.data.message || error.message}`);
        },


    })


}



export default useSignOut;