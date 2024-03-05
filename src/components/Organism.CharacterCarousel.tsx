import OrganismCharacterCard from "./Organism.CharacterCard";
import { useAppSelector } from "../store";
import { Link } from "react-router-dom";

export default function OrganismCharacterCarousel() {
	const filteredCharacters = useAppSelector((state) => state.character.filteredCharacters);
	return (
		<section id="characters" className="relative">
			<header className="flex justify-between items-center">
				<a href="#home" className="text-xl font-bold">
					<i className="bi-search text-base mr-2"></i>
          Characters
				</a>
				<Link to="/characters" className="btn btn-white">
          See all <i className="bi-chevron-right"></i>
				</Link>
			</header>
			<article className="overflow-x-auto snap-x snap-mandatory">
				<div className="flex gap-5 w-auto py-5">
					{filteredCharacters.map((character) => {
						return (
							<OrganismCharacterCard
								key={character.id}
								className="snap-center sm:snap-start w-full max-w-[250px] min-w-[250px]"
								character={character}
							/>
						);
					})}
				</div>
			</article>
		</section>
	);
}
