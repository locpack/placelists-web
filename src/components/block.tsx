import classNames from "classnames";

type BlockProps = {
  header?: string;
  horizontalFlow?: boolean;
  children: React.ReactElement | React.ReactElement[];
};

function Block({ header, horizontalFlow = false, children }: BlockProps) {
  const blockContentClasses = classNames({
    block_content: true,
    block_content__flow_x: horizontalFlow,
    scroll_x: horizontalFlow,
  });

  return (
    <section className="block">
      {header && <h2 className="text_h2">{header}</h2>}
      <div className={blockContentClasses}>{children}</div>
    </section>
  );
}

export default Block;
