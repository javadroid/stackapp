import React from "react";
import ReactDOM from "react-dom/client";
import "swiper/css/bundle";
import "./index.css";
import App from "./App";
import { Provider } from 'react-redux'
import {
  QueryClientProvider,
} from '@tanstack/react-query'
import store, {queryClient} from './app/store'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
