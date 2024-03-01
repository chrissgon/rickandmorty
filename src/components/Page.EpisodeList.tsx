import { useAppSelector } from "../store";
import OrganismEpisodeCard from "./Organism.EpisodeCard";

export default function PageEpisodeList() {
  const episodes = useAppSelector((state) => state.episode.episodes);
  return (
    <section className="relative">
      <header className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Episodes</h2>
        <button className="btn btn-white">
          See all <i className="bi-chevron-right"></i>
        </button>
      </header>
      <article className="overflow-x-auto max-w-screen">
        <div className="flex gap-5 w-auto py-5">
          {episodes.map((episode) => {
            return <OrganismEpisodeCard key={episode.id} {...episode} />;
          })}
        </div>
      </article>
    </section>
  );
}
