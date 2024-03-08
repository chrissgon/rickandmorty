import TemplateGenericSection from "../components/Template.GenericSection";
import OrganismCharacterPagination from "../components/Organism.CharacterPagination";

export default function CharactersPage() {
  return (
    <>
      <TemplateGenericSection>
        All the information on Rick and Morty's most beloved characters
      </TemplateGenericSection>
      <OrganismCharacterPagination />
    </>
  );
}
