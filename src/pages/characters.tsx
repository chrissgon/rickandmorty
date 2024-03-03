import AtomPagination from "../components/Atom.Pagination";
import OrganismCharacterList from "../components/Organism.CharacterList";
import { setCharacterPage, useAppDispatch, useAppSelector } from "../store";

export default function CharactersPage() {
  const page = useAppSelector((state) => state.character.page);
  const pages = useAppSelector((state) => state.character.pages);

  const dispatch = useAppDispatch();

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
