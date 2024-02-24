import { useState, type ChangeEvent } from "react";
import { filterCharacters, useAppDispatch } from "../store";

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
    [ETypes.Episode]: () => {},
    [ETypes.Location]: () => {},
  };

  function changeType(e: ChangeEvent<HTMLSelectElement>): void {
    setType(ETypes[e.target.value as keyof typeof ETypes]);
  }

  function filterByType(): void {
    actionsByType[type]();
  }

  return (
    <div className="w-full flex flex-col gap-3">
      <label className="group group-row">
        <select onChange={changeType} className="input group-item max-w-fit">
          <MoleculeFilterSearch.OptionsTypes />
        </select>

        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
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
