import { useParams } from "react-router-dom";

export default function EpisodePage() {
	return (
		<>
			<h1>episode page</h1>
			<br />
			{JSON.stringify(useParams())}
		</>
	);
}
