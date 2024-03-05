import { useState, type ChangeEvent, useEffect } from "react";
import {
	filterCharacters,
	filterEpisodes,
	filterLocations,
	firstCharacters,
	firstEpisodes,
	firstLocations,
	useAppDispatch,
	useAppSelector,
} from "../store";

enum ETypes {
  Character = "Character",
  Episode = "Episode",
  Location = "Location",
}

export default function MoleculeFilterSearch() {
	const [type, setType] = useState<ETypes>(ETypes.Character);
	const [input, setInput] = useState<string>("");

	const dispatch = useAppDispatch();
	const notFound = useAppSelector(
		(state) =>
			state.character.notFound ||
      state.episode.notFound ||
      state.location.notFound
	);

	useEffect(() => {}, [notFound]);

	const actionsByType = {
		[ETypes.Character]: () => {
			dispatch(filterCharacters({ name: input }));
		},
		[ETypes.Episode]: () => {
			dispatch(filterEpisodes({ name: input }));
		},
		[ETypes.Location]: () => {
			dispatch(filterLocations({ name: input }));
		},
	};

	function changeType(e: ChangeEvent<HTMLSelectElement>): void {
		setType(ETypes[e.target.value as keyof typeof ETypes]);
	}

	function filterByType(): void {
		if (!input.trim()) return;
		actionsByType[type]();
	}

	function resetLists(): void {
		if (input.trim()) return;
		dispatch(firstCharacters());
		dispatch(firstEpisodes());
		dispatch(firstLocations());
	}

	return (
		<div className="w-full flex flex-col gap-3 md:max-w-[500px]">
			<label
				className={`field-group group group-row ${
					!notFound || "field-group-error"
				}`}
				// @ts-expect-error Custom props
				message={!notFound || "No results found"}
			>
				<select onChange={changeType} className="input group-item max-w-fit">
					<MoleculeFilterSearch.OptionsTypes />
				</select>

				<input
					onChange={(e) => setInput(e.target.value)}
					onBlur={resetLists}
					type="search"
					className="input group-item w-1"
					placeholder="Rick Sanchez"
				/>
			</label>
			<button
				onClick={filterByType}
				className="btn btn-solid-primary group-item"
			>
        Search
			</button>
		</div>
	);
}

MoleculeFilterSearch.OptionsTypes = function OptionsTypes() {
	return Object.entries(ETypes).map((typeArr) => {
		if (!isNaN(Number(typeArr[0]))) return;

		return (
			<option key={typeArr[1]} value={typeArr[1]}>
				{typeArr[0]}
			</option>
		);
	});
};
