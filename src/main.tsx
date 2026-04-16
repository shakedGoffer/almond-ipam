import { StrictMode } from "react";
import "./styles/global.css";
import { ThemeProvider } from "next-themes";
import ReactDOM from "react-dom/client";
import App from "./App";



// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <App/>
      </ThemeProvider>
    </StrictMode>,
  );
}
