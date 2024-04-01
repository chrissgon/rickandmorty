import AtomFavoriteButton from "../components/Atom.FavoriteButton";
import OrganismCharacterCarousel from "../components/Organism.CharacterCarousel";
import OrganismEpisodeCarousel from "../components/Organism.EpisodeCarousel";
import OrganismLocationCarousel from "../components/Organism.LocationCarousel";
import TemplateHomeSection from "../components/Template.HomeSection";
import { useAppSelector } from "../store";

export default function IndexPage() {
  const characters = useAppSelector(
    (state) => state.character.filteredCharacters
  );
  const episodes = useAppSelector((state) => state.episode.filteredEpisodes);
  const locations = useAppSelector((state) => state.location.filteredLocations);

  return (
    <>
      <TemplateHomeSection />

      <AtomFavoriteButton className="md:hidden fixed bottom-10 right-10" />

      <OrganismCharacterCarousel characters={characters} />

      <OrganismEpisodeCarousel episodes={episodes} />

      <OrganismLocationCarousel locations={locations} />
    </>
  );
}
