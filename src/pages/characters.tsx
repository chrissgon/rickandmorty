import { useEffect } from "react";
import AtomPagination from "../components/Atom.Pagination";
import OrganismCharacterList from "../components/Organism.CharacterList";
import TemplateFavoriteSection from "../components/Template.FavoriteSection";
import {
	getCharacters,
	setCharacterPage,
	useAppDispatch,
	useAppSelector,
} from "../store";

export default function CharactersPage() {
	const page = useAppSelector((state) => state.character.page);
	const pages = useAppSelector((state) => state.character.pages);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getCharacters(page));
	}, [dispatch, page]);

	return (
		<>
			<TemplateFavoriteSection>
        All the information on Rick and Morty's most beloved characters
			</TemplateFavoriteSection>
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
