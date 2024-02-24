import { ICharacters } from "../store";
import OrganismCharacterCard from "./Organism.CharacterCard";

export default function OrganismCharacterList(props: {
  characters: ICharacters;
}) {
  return (
    <article className="overflow-x-auto max-w-screen">
      <div className="flex gap-5 w-auto py-5">
        {props.characters.map((character) => {
          return <OrganismCharacterCard {...character} />;
        })}
      </div>
    </article>
  );
}
