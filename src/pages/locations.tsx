import OrganismLocationPagination from "../components/Organism.LocationPagination";
import TemplateGenericSection from "../components/Template.GenericSection";

export default function LocationsPage() {
  return (
    <>
      <TemplateGenericSection>
        See the craziest and strangest places in Rick and Morty
      </TemplateGenericSection>
      <OrganismLocationPagination />
    </>
  );
}
