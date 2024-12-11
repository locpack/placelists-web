type BlockProps = {
  children: React.ReactElement | React.ReactElement[];
};

function Block({ children }: BlockProps) {
  return <section className="flex flex-col gap-4">{children}</section>;
}

export { Block };
