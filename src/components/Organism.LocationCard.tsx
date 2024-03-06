import { Link } from "react-router-dom";
import { ILocation } from "../store";
import AtomIconPlanet from "./Atom.IconPlanet";
import { HTMLAttributes } from "react";

interface LocationCardElement extends HTMLAttributes<HTMLDivElement> {
  location: ILocation;
}

export default function OrganismLocationCard(props: LocationCardElement) {
  return (
    <div className={`card relative !overflow-visible h-fit ${props.className}`}>
      <article className="w-full card-content">
        {/* header */}
        <header className="flex gap-4 justify-between items-center">
          <AtomIconPlanet className="w-6" />
          <h4 className="flex-1">
            <p className="max-w-[130px] font-bold whitespace-nowrap overflow-hidden text-ellipsis">
              {props.location.name}
            </p>
            <p>Planet</p>
          </h4>
          <i className="bi-heart text-error text-xl cursor-pointer"></i>
        </header>

        <Link
          to={`/location/${props.location.id}`}
          className="btn btn-white w-full block mt-2 text-center"
        >
          View details
        </Link>
      </article>
    </div>
  );
}
