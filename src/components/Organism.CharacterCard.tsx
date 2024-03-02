import { ICharacter } from "../store";
import AtomIconPlanet from "./Atom.IconPlanet";

export default function OrganismCharacterCard(props: ICharacter) {
  return (
    <div className="relative card w-full h-fit max-w-[250px] min-w-[250px]">
      <article className="flex flex-col gap-2 card-content">
        {/* image */}
        <div className="flex rounded-md justify-center items-center h-36 overflow-hidden">
          <img src={props.image} />
        </div>

        {/* header */}
        <header className="flex gap-2 justify-between items-center">
          <h4 className="font-bold text-md whitespace-nowrap text-ellipsis overflow-hidden">
            {props.name}
          </h4>
          <i className="bi-heart text-error text-xl cursor-pointer"></i>
        </header>

        {/* info */}
        <article>
          <p>
            <i className="bi-activity mr-2"></i>
            {props.status}
          </p>
          <p>
            <i className="bi-person mr-2"></i>
            {props.species}
          </p>
          <p className="w-full text-ellipsis overflow-hidden whitespace-nowrap">
            <AtomIconPlanet className="w-4 inline h-fit mr-2" />
            {props.location.name}
          </p>
        </article>

        {/* button */}
        <button className="btn btn-white w-full mt-2">View details</button>
      </article>
    </div>
  );
}
