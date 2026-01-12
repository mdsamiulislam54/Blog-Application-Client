import { signIn } from "@/api/sign-in";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

type ErrorResponse = {
  message: string;
};


export function useSignIn() {
    const router = useRouter();
    return useMutation({
        mutationFn: signIn,

        onSuccess(res) {
            toast.success("Login successful!");
            router.push("/");
            console.log(" SignIn successful", res.data);

        },
        onError(error: AxiosError<ErrorResponse>) {
            console.error("SignIn error:", error.response?.data.message || error.message);
            toast.error(`Login failed: ${error.response?.data.message || error.message}`);
        },


    })
}