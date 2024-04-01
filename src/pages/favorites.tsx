import OrganismCharacterCarousel from "../components/Organism.CharacterCarousel";
import OrganismEpisodeCarousel from "../components/Organism.EpisodeCarousel";
import OrganismLocationCarousel from "../components/Organism.LocationCarousel";
import TemplateGenericSection from "../components/Template.GenericSection";
import {
  getFavoriteCharactersByArray,
  getFavoriteEpisodesByArray,
  getFavoriteLocationsByArray,
  useAppSelector,
} from "../store";

export default function FavoritesPage() {
  const characters = useAppSelector((state) =>
    getFavoriteCharactersByArray(state.favorite)
  );
  const episodes = useAppSelector((state) =>
    getFavoriteEpisodesByArray(state.favorite)
  );
  const locations = useAppSelector((state) =>
    getFavoriteLocationsByArray(state.favorite)
  );

  return (
    <>
      <TemplateGenericSection isFavoritePage={true}>
        All your favorites characters, episodes and locations in one place
      </TemplateGenericSection>

      {!!characters.length && (
        <OrganismCharacterCarousel characters={characters} />
      )}

      {!!episodes.length && <OrganismEpisodeCarousel episodes={episodes} />}
      {!!locations.length && <OrganismLocationCarousel locations={locations} />}
    </>
  );
}
