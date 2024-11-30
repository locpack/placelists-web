import { BrowserRouter, Route, Routes } from "react-router";
import ProtectedRoute from "./components/protected-route";
import UnprotectedRoute from "./components/unprotected-route";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.Home} element={<HomePage />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
