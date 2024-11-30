import MenuButton from "./menu-button";

function Menu() {
  return (
    <nav className="menu">
      <MenuButton text="Обзор" />
      <MenuButton text="Сохраненные" />
      <MenuButton text="Профиль" />
    </nav>
  );
}

export default Menu;
