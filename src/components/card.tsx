import classNames from "classnames";

type CardProps = {
  text: string;
  hint: string;
  active?: boolean;
  extended?: boolean;
  onClick?: () => void;
};

function Card({ text, hint, active = false, extended = false, onClick = () => {} }: CardProps) {
  const cardClasses = classNames({
    card: true,
    card__active: active,
    card__extended: extended,
  });
  const cardContentClasses = classNames({
    card_header: true,
    card_header__active: active,
  });

  return (
    <button className={cardClasses} onClick={onClick}>
      <span className={cardContentClasses}>{text}</span>
      <span className="card_hint">{hint}</span>
    </button>
  );
}

export default Card;
