import instance from "@/lib/axiosInstance/axios"

type SignInPayload = {
    email: string;
    password: string;
    name?: string;

}

export const signUp = async (data: SignInPayload) => {
    return instance.post("/api/auth/sign-up/email", data);
}