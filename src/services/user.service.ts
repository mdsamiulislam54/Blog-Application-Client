import { env } from "@/env";
import { cookies } from "next/headers";

export const userSession = {
    getSession: async () => {
        try {
            const cookieStore = await cookies();

            const session = await fetch(`${env.BACKEND_URL}/api/auth/get-session`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Cookie: cookieStore.toString()
                },
                cache: "no-store",
                credentials: "include",
            }).then((res) => res.json());
            if (!session === null) {
                return { data: null, error: "No active session" };
            }
            return { data: session, error: null };

        } catch (error) {
            console.log("Error fetching session:", error);
            return { data: null, error: "Failed to fetch session" };
        }
    }
}