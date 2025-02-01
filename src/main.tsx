import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./app";
import "./index.css";
import AddPlacePage from "./pages/add-place-page";
import DiscoverPage from "./pages/discover-page";
import ErrorPage from "./pages/error-page";
import LoginPage from "./pages/login-page";
import PlacelistPage from "./pages/placelist-page";
import { Path } from "./settings";
import { store } from "./store/main";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={Path.Home} element={<App />}>
            <Route index element={<DiscoverPage />} />
            <Route path={`${Path.Placelists}/:id`} element={<PlacelistPage />} />
            <Route path={`${Path.Placelists}/:id/add-place`} element={<AddPlacePage />} />
            <Route path={Path.Login} element={<LoginPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
