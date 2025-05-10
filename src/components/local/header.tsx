interface HeaderProps {
  title: string;
  description?: string;
}

function Header({ title, description }: HeaderProps) {
  return (
    <div className="flex flex-col mb-10 mt-6">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      {description && <p className="text-gray-500 mt-1">{description}</p>}
    </div>
  );
}

export default Header;
