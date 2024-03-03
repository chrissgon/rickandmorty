import { useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  getCharacters,
  getEpisodes,
  getLocations,
  useAppDispatch,
  useAppSelector,
} from "./store";

import AtomFooter from "./components/Atom.Footer";
import IndexPage from "./pages";
import CharactersPage from "./pages/characters";
import CharacterPage from "./pages/character";
import EpisodesPage from "./pages/episodes";
import EpisodePage from "./pages/episode";
import LocationsPage from "./pages/locations";
import LocationPage from "./pages/location";

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
    <Router>
      <div className="p-10 xl:p-20 xl:pb-5 flex flex-col gap-10">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/character/:id" element={<CharacterPage />} />
          <Route path="/episodes" element={<EpisodesPage />} />
          <Route path="/episode/:id" element={<EpisodePage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/location/:id" element={<LocationPage />} />
        </Routes>

        <AtomFooter />
      </div>
    </Router>
  );
}
