import { Link } from "react-router-dom";
import { ILocation } from "../store";
import AtomIconPlanet from "./Atom.IconPlanet";
import { HTMLAttributes } from "react";
import AtomFavoriteIcon from "./Atom.FavoriteIcon";

interface LocationCardElement extends HTMLAttributes<HTMLDivElement> {
  location: ILocation;
}

export default function OrganismLocationCard(props: LocationCardElement) {
  return (
    <div className={`pui-card relative !overflow-visible h-fit ${props.className}`}>
      <article className="w-full pui-card-content">
        {/* header */}
        <header className="flex gap-4 justify-between items-center">
          <AtomIconPlanet className="w-6" />
          <h4 className="flex-1">
            <p className="max-w-[130px] font-bold whitespace-nowrap overflow-hidden text-ellipsis">
              {props.location.name}
            </p>

            <p>{props.location.type}</p>
          </h4>
          <AtomFavoriteIcon location={props.location} />
        </header>

        <Link
          to={`/location/${props.location.id}`}
          className="pui-btn pui-solid pui-surface w-full block mt-2 text-center"
        >
          View details
        </Link>
      </article>
    </div>
  );
}
