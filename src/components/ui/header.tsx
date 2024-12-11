type HeaderProps = {
  text: string;
};

function Header({ text }: HeaderProps) {
  return <h1 className="text-4xl font-bold tracking-tight">{text}</h1>;
}

export { Header };
