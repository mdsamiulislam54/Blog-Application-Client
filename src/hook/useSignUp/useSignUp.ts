import { signIn } from "@/api/sign-in";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { signUp } from "@/api/sign-up";

type ErrorResponse = {
  message: string;
};


export function useSignUp() {
    const router = useRouter();
    return useMutation({
        mutationFn: signUp,

        onSuccess(res) {
            toast.success("Sign up successful!");
            router.push("/auth/login");
            console.log(" Sign up successful", res.data);

        },
        onError(error: AxiosError<ErrorResponse>) {
            console.error("Sign up error:", error.response?.data.message || error.message);
            toast.error(`Sign up failed: ${error.response?.data.message || error.message}`);
        },


    })
}