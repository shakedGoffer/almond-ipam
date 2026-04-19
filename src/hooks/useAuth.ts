import { env } from "@/lib/consts";


export const useAuth = () => {
  const isAuthenticated = () => {return !env.USE_AUTH};

  return {isAuthenticated };
};

export type AuthContext = ReturnType<typeof useAuth>;