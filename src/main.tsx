import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import ProtectedRoute from "./components/protected-route";
import UnprotectedRoute from "./components/unprotected-route";
import "./index.css";
import DiscoverPage from "./pages/discover-page";
import ErrorPage from "./pages/error-page";
import HomePage from "./pages/home-page";
import LoginPage from "./pages/login-page";
import PlacelistsPage from "./pages/placelists-page";
import PlacesPage from "./pages/places-page";
import ProfilePage from "./pages/profile-page";
import RegisterPage from "./pages/register-page";
import SavedPage from "./pages/saved-page";
import { Path } from "./settings";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={Path.Home} element={<App />}>
          <Route index element={<HomePage />} />
          <Route path={Path.Discover} element={<DiscoverPage />} />
          <Route
            path={Path.Profile}
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path={Path.Saved}
            element={
              <ProtectedRoute>
                <SavedPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={Path.Placelists}
            element={
              <ProtectedRoute>
                <PlacelistsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={Path.Places}
            element={
              <ProtectedRoute>
                <PlacesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={Path.Login}
            element={
              <UnprotectedRoute>
                <LoginPage />
              </UnprotectedRoute>
            }
          />
          <Route
            path={Path.Register}
            element={
              <UnprotectedRoute>
                <RegisterPage />
              </UnprotectedRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
