import TemplateFavoriteSection from "../components/Template.FavoriteSection";
import OrganismCharacterPagination from "../components/Organism.CharacterPagination";

export default function CharactersPage() {
  return (
    <>
      <TemplateFavoriteSection>
        All the information on Rick and Morty's most beloved characters
      </TemplateFavoriteSection>
      <OrganismCharacterPagination />
    </>
  );
}
