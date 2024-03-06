import TemplateFavoriteSection from "../components/Template.FavoriteSection";
import OrganismEpisodePagination from "../components/Organism.EpisodePagination";

export default function EpisodesPage() {
  return (
    <>
      <TemplateFavoriteSection>
        All the information about the episodes of Rick and Morty
      </TemplateFavoriteSection>
      <OrganismEpisodePagination />
    </>
  );
}
