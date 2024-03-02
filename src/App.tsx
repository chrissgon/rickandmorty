import { useEffect } from "react";

import {
  getCharacters,
  getEpisodes,
  getLocations,
  useAppDispatch,
  useAppSelector,
} from "./store";

import AtomFavoriteButton from "./components/Atom.FavoriteButton";
import PageCharacterList from "./components/Page.CharacterList";
import PageEpisodeList from "./components/Page.EpisodeList";
import PageSectionHome from "./components/Page.SectionHome";
import PageLocationList from "./components/Page.LocationList";
import AtomFooter from "./components/Atom.Footer";

export default function App() {
  const dispatch = useAppDispatch();
  const pageCharacter = useAppSelector((state) => state.character.page);
  const pageEpisode = useAppSelector((state) => state.episode.page);
  const pageLocation = useAppSelector((state) => state.location.page);

  useEffect(() => {
    dispatch(getCharacters(pageCharacter));
    dispatch(getEpisodes(pageEpisode));
    dispatch(getLocations(pageLocation));
  }, [dispatch, pageCharacter, pageEpisode, pageLocation]);

  return (
    <div className="p-10 xl:p-20 xl:pb-5 flex flex-col gap-10">
      <PageSectionHome />

      <AtomFavoriteButton className="md:hidden fixed bottom-10 right-10" />

      <PageCharacterList />

      <PageEpisodeList />

      <PageLocationList />

      <AtomFooter />
    </div>
  );
}
