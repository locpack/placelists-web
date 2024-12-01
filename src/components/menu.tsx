import MenuButton from "./menu-button";

function Menu() {
  return (
    <>
      <nav className="menu">
        <MenuButton text="Discover" />
        <MenuButton text="Saved" />
        <MenuButton text="Profile" />
      </nav>
    </>
  );
}

export default Menu;
