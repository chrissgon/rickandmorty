import { useEffect } from "react";
import { getEpisodes, setEpisodePage, useAppDispatch, useAppSelector } from "../store";
import AtomPagination from "./Atom.Pagination";
import OrganismEpisodeList from "./Organism.EpisodeList";

export default function OrganismEpisodePagination() {
  const dispatch = useAppDispatch();

  const page = useAppSelector((state) => state.episode.page);
  const pages = useAppSelector((state) => state.episode.pages);

  useEffect(() => {
    dispatch(getEpisodes(page));
  }, [dispatch, page]);

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
