import { env } from "@/env";

export const blogsPostService = {
    getBlogPost: async () => {
        try {
            const response = await fetch(`${env.BACKEND_URL}/post?limit=6`);
            const data = await response.json();
            return { success: true, data, error: null };
        } catch (error) {
            return { success: false, data: null, error: (error as Error).message };
        }
    }
}