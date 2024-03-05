import { Link } from "react-router-dom";
import { ICharacter } from "../store";
import AtomIconPlanet from "./Atom.IconPlanet";
import {HTMLAttributes} from "react";

interface CharacterCardElement extends HTMLAttributes<HTMLDivElement> {
  character: ICharacter;
}

export default function OrganismCharacterCard(props: CharacterCardElement) {
	return (
		<div className={`card relative h-fit ${props.className}`}>
			<article className="flex flex-col gap-2 card-content">
				{/* image */}
				<div className="flex rounded-md justify-center items-center h-36 overflow-hidden">
					<img
						loading="lazy"
						alt={props.character.name}
						src={props.character.image}
					/>
				</div>

				{/* header */}
				<header className="flex gap-2 justify-between items-center">
					<h4 className="font-bold text-md whitespace-nowrap text-ellipsis overflow-hidden">
						{props.character.name}
					</h4>
					<i className="bi-heart text-error text-xl cursor-pointer"></i>
				</header>

				{/* info */}
				<article>
					<p>
						<i className="bi-activity mr-2"></i>
						{props.character.status}
					</p>
					<p className="w-full text-ellipsis overflow-hidden whitespace-nowrap">
						<i className="bi-person mr-2"></i>
						{props.character.species}
					</p>
					<p className="w-full text-ellipsis overflow-hidden whitespace-nowrap">
						<AtomIconPlanet className="w-4 inline h-fit mr-2" />
						{props.character.location.name}
					</p>
				</article>

				<Link
					to={`/character/${props.character.id}`}
					className="btn btn-white w-full block mt-2 text-center"
				>
          View details
				</Link>
			</article>
		</div>
	);
}
