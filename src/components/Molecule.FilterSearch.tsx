import { useState, type ChangeEvent } from "react";
import {
  filterCharacters,
  filterEpisodes,
  getCharacters,
  getEpisodes,
  useAppDispatch,
} from "../store";
import { filterLocations, getLocations } from "../store/location";

enum ETypes {
  Character = "Character",
  Episode = "Episode",
  Location = "Location",
}

export default function MoleculeFilterSearch() {
  const [type, setType] = useState<ETypes>(ETypes.Character);
  const [input, setInput] = useState<string>("");

  const dispatch = useAppDispatch();

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
    dispatch(getCharacters(1));
    dispatch(getEpisodes(1));
    dispatch(getLocations(1));
  }

  return (
    <div className="w-full flex flex-col gap-3 md:max-w-[500px]">
      <label className="group group-row">
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
