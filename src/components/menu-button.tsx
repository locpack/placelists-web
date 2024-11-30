type MenuButtonProps = {
  text: string;
};

function MenuButton({ text }: MenuButtonProps) {
  return <button className="menu_button text_p">{text}</button>;
}

export default MenuButton;
