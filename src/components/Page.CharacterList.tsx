import OrganismCharacterCard from "./Organism.CharacterCard";
import { useAppSelector } from "../store";

export default function PageCharacterList() {
  const characters = useAppSelector((state) => state.character.characters);
  return (
    <section id="characters" className="relative">
      <header className="flex justify-between items-center">
        <a href="#home" className="text-xl font-bold">
          <i className="bi-search text-base mr-2"></i>
          Characters
        </a>
        <button className="btn btn-white">
          See all <i className="bi-chevron-right"></i>
        </button>
      </header>
      <article className="overflow-x-auto max-w-screen">
        <div className="flex gap-5 w-auto py-5">
          {characters.map((character) => {
            return (
              <OrganismCharacterCard key={character.name} {...character} />
            );
          })}
        </div>
      </article>
    </section>
  );
}
