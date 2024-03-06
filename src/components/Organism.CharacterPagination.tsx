import { useEffect } from "react";
import { getCharacters, setCharacterPage, useAppDispatch, useAppSelector } from "../store";
import AtomPagination from "./Atom.Pagination";
import OrganismCharacterList from "./Organism.CharacterList";

export default function OrganismCharacterPagination() {
  const dispatch = useAppDispatch();

  const page = useAppSelector((state) => state.character.page);
  const pages = useAppSelector((state) => state.character.pages);

  useEffect(() => {
    dispatch(getCharacters(page));
  }, [dispatch, page]);

  return (
    <>
      <OrganismCharacterList />
      <div className="flex justify-center">
        <AtomPagination
          change={(p) => dispatch(setCharacterPage({ page: p }))}
          page={page}
          pages={pages}
        />
      </div>
    </>
  );
}
