import { Link, useParams } from "react-router-dom";
import {
  ILocation,
  getCharacter,
  useAppDispatch,
  useAppSelector,
} from "../store";
import { useEffect, useState } from "react";

import AtomFavoriteButton from "../components/Atom.FavoriteButton";
import OrganismCharacterPagination from "../components/Organism.CharacterPagination";
import OrganismLocationCard from "../components/Organism.LocationCard";

import logo from "/logo.svg";
import home from "/bg-home.png";

export default function CharacterPage() {
  const params = useParams();
  const dispatch = useAppDispatch();

  const character = useAppSelector((state) => state.character.character);
  const [useOrigin, setOrigin] = useState<ILocation | null>(null);
  const [useLocation, setLocation] = useState<ILocation | null>(null);

  useEffect(() => {
    dispatch(getCharacter(params.id!));
  }, [dispatch, params]);

  useEffect(() => {
    (async function getCharacterOrigin() {
      if (!character) return;
      setOrigin(await (await fetch(character.origin.url)).json());
    })();

    (async function getCharacterLocation() {
      if (!character) return;
      setLocation(await (await fetch(character.location.url)).json());
    })();

    document.location.href = "#body";
  }, [character]);

  return (
    character && (
      <>
        <section className="relative flex flex-wrap gap-10">
          {/* header */}
          <header className="w-full flex flex-col gap-10 z-10">
            {/* button */}
            <div className="flex justify-between gap-10">
              <Link to="/" className="btn btn-white w-fit">
                <i className="bi-chevron-left mr-2"></i>
                Back
              </Link>

              <AtomFavoriteButton />
            </div>
            {/* logo */}
            <img
              loading="lazy"
              src={logo}
              alt="Rick and Morty Logo"
              className="w-36"
            />
          </header>
          {/* info */}
          <article className="w-full flex max-md:flex-col gap-8 mb-12">
            {/* image */}
            <div className="md:max-w-[300px] h-fit flex rounded-md flex-col justify-center items-center overflow-hidden">
              <img
                loading="lazy"
                alt={character.name}
                src={character.image}
                className="min-w-max min-h-max w-full"
              />
            </div>

            <div className="flex flex-col flex-1 gap-10">
              {/* name */}
              <div className="flex-1 flex flex-col gap-4">
                <header className="flex gap-2 items-center">
                  <h1 className="text-3xl font-bold">{character.name}</h1>
                  <i className="bi-heart text-error text-xl cursor-pointer"></i>
                </header>

                <p className=" inline-flex gap-2 items-center">
                  <i className="bi bi-collection-play text-xl"></i>
                  Participated in {character.episode.length} episodes
                </p>

                <aside className="w-full inline-flex flex-wrap gap-2 z-10">
                  <span
                    className={`badge ${
                      character.status === "Alive"
                        ? "badge-outline-success"
                        : "badge-outline-error"
                    }`}
                  >
                    <i className="bi-activity mr-2"></i>
                    {character.status}
                  </span>
                  <span className="badge badge-white">
                    <i className="bi-person mr-2"></i>
                    {character.species}
                  </span>
                  <span className="badge badge-white">
                    <i className="bi-gender-ambiguous mr-2"></i>
                    {character.gender}
                  </span>
                </aside>
              </div>

              <aside className="flex flex-row max-sm:flex-wrap gap-10 z-10">
                {/* locations */}
                {useOrigin && (
                  <OrganismLocationCard
                    location={useOrigin}
                    className="max-sm:flex-1"
                  />
                )}
                {useLocation && (
                  <OrganismLocationCard
                    location={useLocation}
                    className="max-sm:flex-1"
                  />
                )}
              </aside>

              <aside className="max-lg:hidden flex justify-center items-center flex-1">
                <img
                  loading="lazy"
                  src={home}
                  alt="Rick and Morty art"
                  className="absolute w-[700px] -top-6 pl-10 -right-96 xl:-right-40"
                />
              </aside>
            </div>
          </article>

          <a
            href="#body"
            className="bi-chevron-up btn btn-white opacity-80 !py-3 rounded-full fixed bottom-10 right-10 z-20"
          ></a>
        </section>

        <div className="flex flex-col gap-6">
          <h4 className="text-xl font-bold">More Characters</h4>
          <OrganismCharacterPagination />
        </div>
      </>
    )
  );
}
