import { useAppSelector } from "../store";
import OrganismEpisodeCard from "./Organism.EpisodeCard";

export default function OrganismEpisodeList() {
  const episodes = useAppSelector((state) => state.episode.episodes);
  return (
    <article className="flex flex-wrap gap-5 justify-start items-start">
      {episodes.map((episode) => {
        return (
          <OrganismEpisodeCard
            className="flex-[230px] sm:max-w-[300px]"
            key={episode.id}
            episode={episode}
          />
        );
      })}
    </article>
  );
}
