import instance from "@/lib/axiosInstance/axios"
export const signOut = async () => {
    return instance.post("/api/auth/sign-out");
}