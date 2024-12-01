import { Outlet } from "react-router";
import Menu from "./components/menu";

function App() {
  return (
    <>
      <main className="main scroll_y">
        <Outlet />
      </main>
      <Menu />
    </>
  );
}

export default App;
