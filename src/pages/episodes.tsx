import { useEffect } from "react";
import AtomPagination from "../components/Atom.Pagination";
import OrganismEpisodeList from "../components/Organism.EpisodeList";
import TemplateFavoriteSection from "../components/Template.FavoriteSection";
import {
	getEpisodes,
	setEpisodePage,
	useAppDispatch,
	useAppSelector,
} from "../store";

export default function EpisodesPage() {
	const page = useAppSelector((state) => state.episode.page);
	const pages = useAppSelector((state) => state.episode.pages);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getEpisodes(page));
	}, [dispatch, page]);

	return (
		<>
			<TemplateFavoriteSection>
        All the information about the episodes of Rick and Morty
			</TemplateFavoriteSection>
			<OrganismEpisodeList />
			<div className="flex justify-center">
				<AtomPagination
					change={(p) => dispatch(setEpisodePage({ page: p }))}
					page={page}
					pages={pages}
				/>
			</div>
		</>
	);
}
