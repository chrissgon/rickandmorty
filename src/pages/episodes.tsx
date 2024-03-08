import TemplateGenericSection from "../components/Template.GenericSection";
import OrganismEpisodePagination from "../components/Organism.EpisodePagination";

export default function EpisodesPage() {
  return (
    <>
      <TemplateGenericSection>
        All the information about the episodes of Rick and Morty
      </TemplateGenericSection>
      <OrganismEpisodePagination />
    </>
  );
}
