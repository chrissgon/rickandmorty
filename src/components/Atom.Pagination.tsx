export default function AtomPagination(props: {
  page: number;
  pages: number;
  change: (page: number) => void;
}) {
  return (
    <ul className="pui-list pui-hoverable pui-group-row list-none">
      <a
        aria-disabled={props.page === 1}
        onClick={() => props.change(props.page - 1)}
        className="pui-list-item"
      >
        <i className="bi-chevron-left"></i>
      </a>
      <a className="pui-list-item pui-soft pui-theme">{props.page}</a>
      <a
        aria-disabled={props.page === props.pages}
        onClick={() => props.change(props.page + 1)}
        className="pui-list-item"
      >
        {props.page + 1}
      </a>
      <a
        aria-disabled={props.page === props.pages || props.page + 1 === props.pages}
        onClick={() => props.change(props.page + 2)}
        className="pui-list-item"
      >
        {props.page + 2}
      </a>
      <a
        onClick={() => props.change(props.page + 1)}
        aria-disabled={props.page === props.pages}
        className="pui-list-item"
      >
        <i className="bi-chevron-right"></i>
      </a>
    </ul>
  );
}
