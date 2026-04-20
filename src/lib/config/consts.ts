import * as z from 'zod';

// ENV Variables
const envSchema = z.object({
  BACK_URL: z.string().url(),
  USE_AUTH: z.string().transform((value) => value === 'true'),
});

const env = envSchema.parse({
  BACK_URL: import.meta.env.VITE_BACK_URL,
  USE_AUTH: import.meta.env.VITE_USE_AUTH,
});


// Query Keys
const QUERY_KEYS = {
  subnets: 'subnets',
}

export { env, QUERY_KEYS }