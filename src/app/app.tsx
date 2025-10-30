import { StrictMode } from "react";
import { Routing } from "@app/providers/routes.tsx";

export function App() {
  return (
    <StrictMode>
      <Routing />
    </StrictMode>
  );
}
