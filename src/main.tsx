import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { MantineProvider, GlobalStyles, NormalizeCSS } from "@mantine/core";

import App from "./App";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={{ colorScheme: "dark" }}>
        <NormalizeCSS />
        <GlobalStyles />
        <App />
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
