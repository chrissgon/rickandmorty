import AtomFavoriteButton from "./components/Atom.FavoriteButton";
import OrganismSectionHome from "./components/Organism.SectionHome";

export default function App() {
  return (
    <div className="p-10 xl:p-20 flex flex-col gap-10">
      <OrganismSectionHome />

      <AtomFavoriteButton className="md:hidden fixed bottom-10 right-10" />
    </div>
  );
}
