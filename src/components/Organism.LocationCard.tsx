import { Link } from "react-router-dom";
import { ILocation } from "../store";
import AtomIconPlanet from "./Atom.IconPlanet";

export default function OrganismLocationCard(props: ILocation) {
  return (
    <div className="relative snap-center sm:snap-start flex flex-col items-center !overflow-visible card  w-full h-fit max-w-[250px] min-w-[250px]">
      <article className="w-full card-content">
        {/* header */}
        <header className="flex gap-4 justify-between items-center">
          <AtomIconPlanet className="w-6" />
          <h4 className="flex-1">
            <p className="max-w-[130px] font-bold whitespace-nowrap overflow-hidden text-ellipsis">
              {props.name}
            </p>
            <p>Planet</p>
          </h4>
          <i className="bi-heart text-error text-xl cursor-pointer"></i>
        </header>
        
        <Link
          to={`/location/${props.id}`}
          className="btn btn-white w-full block mt-2 text-center"
        >
          View details
        </Link>
      </article>
    </div>
  );
}
