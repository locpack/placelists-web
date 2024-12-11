import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./app";
import "./index.css";
import DiscoverPage from "./pages/discover-page";
import ErrorPage from "./pages/error-page";
import PlacelistPage from "./pages/placelist-page";
import { Path } from "./settings";
import { store } from "./store/main";

// store.dispatch(checkAuth());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={Path.Home} element={<App />}>
            <Route path={Path.Discover} element={<DiscoverPage />} />
            <Route path={`${Path.Placelists}/:id`} element={<PlacelistPage />} />
            {/* <Route path={Path.Profile} element={<ProfilePage />} /> */}
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
