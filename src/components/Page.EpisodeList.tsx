import { useAppSelector } from "../store";
import OrganismEpisodeCard from "./Organism.EpisodeCard";

export default function PageEpisodeList() {
  const episodes = useAppSelector((state) => state.episode.episodes);
  return (
    <section id="episodes" className="relative">
      <header className="flex justify-between items-center">
        <a href="#home" className="text-xl font-bold">
          <i className="bi-search text-base mr-2"></i>
          Episodes
        </a>
        <button className="btn btn-white">
          See all <i className="bi-chevron-right"></i>
        </button>
      </header>
      <article className="overflow-x-auto max-w-screen">
        <div className="flex gap-5 w-auto py-5">
          {episodes.map((episode) => {
            return <OrganismEpisodeCard key={episode.name} {...episode} />;
          })}
        </div>
      </article>
    </section>
  );
}
