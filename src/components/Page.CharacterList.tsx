import OrganismCharacterCard from "./Organism.CharacterCard";
import { useAppSelector } from "../store";

export default function PageCharacterList() {
  const characters = useAppSelector((state) => state.character.characters);
  return (
    <section className="relative">
      <header className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Characters</h2>
        <button className="btn btn-white">
          See all <i className="bi-chevron-right"></i>
        </button>
      </header>
      <article className="overflow-x-auto max-w-screen">
        <div className="flex gap-5 w-auto py-5">
          {characters.map((character) => {
            return <OrganismCharacterCard key={character.id} {...character} />;
          })}
        </div>
      </article>
    </section>
  );
}

