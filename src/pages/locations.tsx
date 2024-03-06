import OrganismLocationPagination from "../components/Organism.LocationPagination";
import TemplateFavoriteSection from "../components/Template.FavoriteSection";

export default function LocationsPage() {
  return (
    <>
      <TemplateFavoriteSection>
        See the craziest and strangest places in Rick and Morty
      </TemplateFavoriteSection>
      <OrganismLocationPagination />
    </>
  );
}
