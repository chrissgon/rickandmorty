import { useParams } from "react-router-dom";
import {
  getCharacter,
  useAppDispatch,
  // useAppSelector,
} from "../store";
import { useEffect } from "react";
import TemplateFavoriteSection from "../components/Template.FavoriteSection";
import OrganismCharacterList from "../components/Organism.CharacterList";
// import AtomPagination from "../components/Atom.Pagination";

export default function CharacterPage() {
  const params = useParams();
  const dispatch = useAppDispatch();
  
  // const character = useAppSelector((state) => state.character.character);

  useEffect(() => {
    if (!params.id) return;
    dispatch(getCharacter(params.id));
  });

  return (
    <>
      <TemplateFavoriteSection>
        All the information on Rick and Morty's most beloved characters
      </TemplateFavoriteSection>
      <OrganismCharacterList />
     
    </>
  );
}
