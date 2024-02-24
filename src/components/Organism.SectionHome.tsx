import { useEffect } from "react";

import AtomFigmaLink from "./Atom.FigmaLink";
import AtomGithubLink from "./Atom.GithubLink";
import AtomDarkMode from "./Atom.DarkMode";

import logo from "/logo.svg";
import MoleculeFilterSearch from "./Molecule.FilterSearch";
import {
  getCharacters,
  getEpisodes,
  useAppDispatch,
  useAppSelector,
} from "../store";
import AtomFavoriteButton from "./Atom.FavoriteButton";

export default function OrganismSectionHome() {
  const dispatch = useAppDispatch();
  const pageCharacter = useAppSelector((state) => state.character.page);
  const pageEpisode = useAppSelector((state) => state.episode.page);

  useEffect(() => {
    dispatch(getCharacters(pageCharacter));
    dispatch(getEpisodes(pageEpisode));
  }, [dispatch, pageCharacter, pageEpisode]);

  return (
    <section className="flex flex-wrap gap-10">
      <header className="w-full flex justify-between items-center z-10">
        <img src={logo} alt="Logo" className="w-36" />

        <div className="flex items-center gap-5">
          <AtomFavoriteButton className="max-md:hidden" />
          <hr className="max-md:!hidden vertical !h-[30px]" />
          <AtomDarkMode />
          <AtomGithubLink />
          <AtomFigmaLink />
        </div>
      </header>
      <article className="w-full md:w-1/2 flex flex-col justify-center gap-8 my-12">
        <h1 className="text-4xl font-bold">
          All in one <span className="text-4xl text-theme"> fuck#$%</span> place
        </h1>

        <p className="text-base text-secondary">
          Details about the fuck#$% characters, episodes and even planets.
        </p>

        <div className="flex gap-5">
          <MoleculeFilterSearch />
        </div>
      </article>
      <aside className="max-md:hidden flex justify-center items-center flex-1">
        <img
          loading="lazy"
          src="/bg-home.png"
          alt="Rick and Morty art"
          className="absolute w-[700px] -top-6 pl-10"
        />
      </aside>
    </section>
  );
}
