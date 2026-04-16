import { RouterProvider } from "@tanstack/react-router";
import { useAuth } from "./hooks/useAuth";
import { Toaster } from "sonner";
import router from "./Router";


function App() {
  const auth = useAuth();
  return (
    <>
      <Toaster duration={10000} richColors position="top-right" />
      <RouterProvider router={router} context={{ auth }} />
    </>
  );
}

export default App;
