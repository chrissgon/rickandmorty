import { Link } from "react-router-dom";
import AtomFavoriteButton from "../components/Atom.FavoriteButton";
import logo from "/logo.svg";
import home from "/bg-home.png";
import { PropsWithChildren } from "react";

export default function OrganismPageLayout(props: PropsWithChildren) {
  return (
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
          {props.children}
        </article>

        <a
          href="#body"
          className="bi-chevron-up btn btn-white opacity-80 !py-3 rounded-full fixed bottom-10 right-10 z-20"
        ></a>
      </section>
    </>
  );
}

OrganismPageLayout.DefaultBanner = function () {
  return (
    <aside className="max-md:hidden flex justify-center items-center flex-1">
      <img
        loading="lazy"
        src={home}
        alt="Rick and Morty art"
        className="absolute w-[700px] -top-24 pl-10 -right-40 xl:-right-0"
      />
    </aside>
  );
};
