import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface FavoriteButtonElement
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function AtomFavoriteButton(props: FavoriteButtonElement) {
  return (
    <Link
      to="/favorites"
      className={`${props.className} btn btn-solid-error z-10`}
    >
      Favorites <i className="bi bi-heart-fill"></i>
    </Link>
  );
}
