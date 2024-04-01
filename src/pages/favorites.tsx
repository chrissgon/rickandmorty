import TemplateGenericSection from "../components/Template.GenericSection";
import { useAppSelector } from "../store";

export default function FavoritesPage() {
  const characters = useAppSelector((state) => state.favorite.characters);

  return (
    <>
      <TemplateGenericSection isFavoritePage={true}>
        All your favorites characters, episodes and locations in one place
        {JSON.stringify(characters)}
      </TemplateGenericSection>
    </>
  );
}
