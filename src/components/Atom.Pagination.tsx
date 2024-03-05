export default function AtomPagination(props: {
  page: number;
  pages: number;
  change: (page: number) => void;
}) {
	return (
		<ul className="list list-hoverable unmarker group-row">
			<a
				// @ts-expect-error disabled prop
				disabled={props.page === 1}
				onClick={() => props.change(props.page - 1)}
				className="list-item"
			>
				<i className="bi-chevron-left"></i>
			</a>
			<a className="list-item active">{props.page}</a>
			<a
				// @ts-expect-error disabled prop
				disabled={props.page === props.pages}
				onClick={() => props.change(props.page + 1)}
				className="list-item"
			>
				{props.page + 1}
			</a>
			<a
				// @ts-expect-error disabled prop
				disabled={props.page === props.pages || props.page + 1 === props.pages}
				onClick={() => props.change(props.page + 2)}
				className="list-item"
			>
				{props.page + 2}
			</a>
			<a
				onClick={() => props.change(props.page + 1)}
				// @ts-expect-error disabled prop
				disabled={props.page === props.pages}
				className="list-item"
			>
				<i className="bi-chevron-right"></i>
			</a>
		</ul>
	);
}
