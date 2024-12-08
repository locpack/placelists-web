import classNames from "classnames";

type CardProps = {
  text: string;
  hint: string;
  active?: boolean;
  onClick?: () => void;
};

function Card({ text, hint, active = false, onClick = () => {} }: CardProps) {
  const cardClasses = classNames({
    card: true,
    card__active: active,
  });
  const contentClasses = classNames({
    text_p: true,
    card_content: true,
    card__active: active,
  });

  return (
    <button className={cardClasses} onClick={onClick}>
      <span className={contentClasses}>{text}</span>
      <span className={contentClasses}>{hint}</span>
    </button>
  );
}

export default Card;
