import { useParams } from "react-router-dom";
import { getEpisode, useAppDispatch, useAppSelector } from "../store";
import { useEffect } from "react";
import OrganismPageLayout from "../components/Organism.PageLayout";
import OrganismEpisodePagination from "../components/Organism.EpisodePagination";

export default function EpisodePage() {
  const params = useParams();
  const dispatch = useAppDispatch();

  const episode = useAppSelector((state) => state.episode.episode);

  useEffect(() => {
    dispatch(getEpisode(params.id!));
  }, [dispatch, params]);

  return (
    episode && (
      <>
        <OrganismPageLayout>
          <article className="flex flex-col gap-2">
            <i className="bi bi-collection-play text-4xl"></i>
            <h1 className="text-3xl font-bold mt-">
              {episode.name}

              <i className="bi-heart text-error text-xl cursor-pointer align-middle ml-2"></i>
            </h1>

            <aside className="flex gap-2 flex-wrap">
              <span className="badge badge-white inline-flex items-center gap-2">
                <i className="bi-calendar-event"></i>
                {episode.releasedAt}
              </span>
              <span className="badge badge-white inline-flex items-center gap-2">
                <i className="bi-play-btn"></i>
                {episode.episode}
              </span>
            </aside>

            <footer className="flex text-base items-center mt-8 badge badge-outline-warn">
              <i className="bi-info-circle-fill text-base mr-3"></i>
              <span>
                <b className="font-bold">{episode.characters.length}</b>{" "}
                characters participated in this episode
              </span>
            </footer>
            {/* <header className="flex items-center gap-2">
            </header> */}
          </article>

          <OrganismPageLayout.DefaultBanner />
        </OrganismPageLayout>

        <hr />

        <div className="flex flex-col gap-6">
          <h4 className="text-xl font-bold">More Episodes</h4>
          <OrganismEpisodePagination />
        </div>
      </>
    )
  );
}
