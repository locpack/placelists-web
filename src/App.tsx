import { Outlet } from "react-router";
import { MENU_HIDDEN } from "./settings";

function App() {
  const menuHidden = MENU_HIDDEN;

  return (
    <>
      <main className="flex flex-col gap-8 p-4 pt-16">
        <Outlet />
      </main>
    </>
  );
}

export default App;
