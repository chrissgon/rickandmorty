import { useParams } from "react-router-dom";

export default function LocationPage() {
	return (
		<>
			<h1>location page</h1>
			<br />
			{JSON.stringify(useParams())}
		</>
	);
}
