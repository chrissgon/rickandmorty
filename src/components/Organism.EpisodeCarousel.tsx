import { Link } from "react-router-dom";
import { useAppSelector } from "../store";
import OrganismEpisodeCard from "./Organism.EpisodeCard";

export default function OrganismEpisodeCarousel() {
	const filteredEpisodes = useAppSelector((state) => state.episode.filteredEpisodes);
	return (
		<section id="episodes" className="relative">
			<header className="flex justify-between items-center">
				<a href="#home" className="text-xl font-bold">
					<i className="bi-search text-base mr-2"></i>
          Episodes
				</a>
				<Link to="/episodes" className="btn btn-white">
          See all <i className="bi-chevron-right"></i>
				</Link>
			</header>
			<article className="overflow-x-auto snap-x snap-mandatory">
				<div className="flex gap-5 w-auto py-5">
					{filteredEpisodes.map((episode) => {
						return (
							<OrganismEpisodeCard
								className="snap-center sm:snap-start w-full max-w-[250px] min-w-[250px]"
								key={episode.id}
								episode={episode}
							/>
						);
					})}
				</div>
			</article>
		</section>
	);
}
