import { RouterProvider } from "@tanstack/react-router";
import { useAuth } from "./hooks/useAuth";
import { Toaster } from "sonner";
import router from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const auth = useAuth();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster duration={10000} richColors position="top-right" />
        <RouterProvider router={router} context={{ auth, queryClient }} />
      </QueryClientProvider>
    </>
  );
}

export default App;
