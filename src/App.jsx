import React from "react";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes/myRoutes";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;
