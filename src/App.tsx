import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import HomePage from "./pages/home-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
