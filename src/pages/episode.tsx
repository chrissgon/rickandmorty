import { useParams } from "react-router-dom";
import { getEpisode, useAppDispatch, useAppSelector } from "../store";
import { useEffect } from "react";
import OrganismPageLayout from "../components/Organism.PageLayout";

export default function EpisodePage() {
  const params = useParams();
  const dispatch = useAppDispatch();

  const episode = useAppSelector((state) => state.episode.episode);

  useEffect(() => {
    dispatch(getEpisode(params.id!));
  }, []);

  return (
    <>
      <OrganismPageLayout>{JSON.stringify(episode)}</OrganismPageLayout>
    </>
  );
}
