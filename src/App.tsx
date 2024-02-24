import AtomFavoriteButton from "./components/Atom.FavoriteButton";
import OrganismCharacterList from "./components/Organism.CharacterList";
import PageSectionHome from "./components/Page.SectionHome";
import { useAppSelector } from "./store";

export default function App() {
  const characters = useAppSelector((state) => state.character.characters);

  return (
    <div className="p-10 xl:p-20 flex flex-col gap-10">
      <PageSectionHome />

      <AtomFavoriteButton className="md:hidden fixed bottom-10 right-10" />

      <section className="relative">
        <header className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Characters</h2>
          <button className="btn btn-white">
            See all <i className="bi-chevron-right"></i>
          </button>
        </header>
        <OrganismCharacterList characters={characters} />
      </section>
    </div>
  );
}
