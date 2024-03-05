import OrganismCharacterCard from "./Organism.CharacterCard";
import { useAppSelector } from "../store";

export default function OrganismCharacterList() {
	const characters = useAppSelector((state) => state.character.characters);
	return (
		<article className="flex flex-wrap gap-5 justify-start items-start">
			{characters.map((character) => {
				return (
					<OrganismCharacterCard
						className="flex-[200px] sm:max-w-[300px]"
						key={character.id}
						character={character}
					/>
				);
			})}
		</article>
	);
}
