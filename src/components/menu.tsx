import DiscoverIcon from "../icons/discover-icon";
import ProfileIcon from "../icons/profile-icon";
import SaveIcon from "../icons/save-icon";
import { Path } from "../settings";
import MenuButton from "./menu-button";

function Menu() {
  return (
    <>
      <nav className="menu">
        <MenuButton text="Discover" path={Path.Discover} icon={<DiscoverIcon />} />
        <MenuButton text="Saved" path={Path.Saved} icon={<SaveIcon />} />
        <MenuButton text="Profile" path={Path.Profile} icon={<ProfileIcon />} />
      </nav>
    </>
  );
}

export default Menu;
