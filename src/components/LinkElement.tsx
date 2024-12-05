import { Link } from "react-router-dom";

const LinkElement = ({
  to,
  contents,
  children,
  isExternal = false,
  ariaLabel,
  className,
  id,
  onClick,
}: LinkElementProps) => {
  return (
    <Link
      id={id}
      className={className}
      to={to}
      target={isExternal ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onClick={onClick}>
      {contents || children}
    </Link>
  );
};

export default LinkElement;
