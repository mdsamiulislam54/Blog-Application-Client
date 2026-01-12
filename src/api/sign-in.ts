import instance from "@/lib/axiosInstance/axios"

type SignInPayload = {
    email: string;
    password: string;
}

export const signIn = async (data: SignInPayload) => {
    return instance.post("/api/auth/sign-in/email", data);
}