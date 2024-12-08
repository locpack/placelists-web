import classNames from "classnames";
import { Outlet } from "react-router";
import Menu from "./components/menu";
import { MENU_HIDDEN } from "./settings";

function App() {
  const menuHidden = MENU_HIDDEN;

  const mainClasses = classNames({
    main: true,
    scroll_y: true,
    main__shrinked: !menuHidden,
  });

  return (
    <>
      <main className={mainClasses}>
        <Outlet />
      </main>
      {!menuHidden && <Menu />}
    </>
  );
}

export default App;
