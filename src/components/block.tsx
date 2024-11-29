import classNames from "classnames";

type BlockProps = {
  header?: string;
  horizontalFlow?: boolean;
  children: React.ReactNode;
};

function Block({ header, horizontalFlow = false, children }: BlockProps) {
  const blockContentClasses = classNames({
    block_content: true,
    "block_content__flow-x scroll-x": horizontalFlow,
  });

  return (
    <section className="block">
      {header && <h3 className="text-h3">{header}</h3>}
      <div className={blockContentClasses}></div>
      {children}
    </section>
  );
}

export default Block;
