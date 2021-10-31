import { GlobalStyles, MantineProvider, NormalizeCSS } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        theme={{
          colorScheme: "dark",
          headings: { fontFamily: "'Signika', sans-serif" },
        }}
      >
        <NormalizeCSS />
        <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
