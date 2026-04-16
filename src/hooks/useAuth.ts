export const useAuth = () => {
  const isAuthenticated = () => {return true};

  return {isAuthenticated };
};

export type AuthContext = ReturnType<typeof useAuth>;