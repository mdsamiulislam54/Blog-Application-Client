import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server:{
        BACKEND_URL: z.url(),
        BETTER_AUTH_SECRET: z.string().min(16),
    },
    runtimeEnv:{
        BACKEND_URL: process.env.BACKEND_URL,
        BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    }
});