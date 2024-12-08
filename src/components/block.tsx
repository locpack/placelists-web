type BlockProps = {
  children: React.ReactElement | React.ReactElement[];
};

function Block({ children }: BlockProps) {
  return <section className="block">{children}</section>;
}

export default Block;
