import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App.tsx";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import ErrorPage from "@/pages/error-page.tsx";
import { store } from "@/store/main.ts";
import LoginPage from "@/pages/login-page.tsx";
import RegisterPage from "@/pages/register-page.tsx";
import { checkAuth } from "@/store/api-actions/auth.ts";

const root = createRoot(document.getElementById("root")!);

store.dispatch(checkAuth());

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
