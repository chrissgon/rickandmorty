import AtomPagination from "../components/Atom.Pagination";
import OrganismEpisodeList from "../components/Organism.EpisodeList";
import {  setEpisodePage, useAppDispatch, useAppSelector } from "../store";

export default function EpisodesPage() {
  const page = useAppSelector((state) => state.episode.page);
  const pages = useAppSelector((state) => state.episode.pages);

  const dispatch = useAppDispatch();

  return (
    <>
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
