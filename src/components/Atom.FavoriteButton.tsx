export default function AtomFavoriteButton(props: { className: string }) {
  return (
    <button className={`${props.className} btn btn-solid-error`}>
      Favorites <i className="bi bi-heart-fill"></i>
    </button>
  );
}
