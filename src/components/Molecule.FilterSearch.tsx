import { type ChangeEvent, useEffect, useRef, ElementRef } from "react";
import {
  ETypes,
  filterCharacters,
  filterEpisodes,
  filterLocations,
  firstCharacters,
  firstEpisodes,
  firstLocations,
  useAppDispatch,
  useAppSelector,
} from "../store";



export default function MoleculeFilterSearch() {
  const type = useRef<ETypes>(ETypes.Character);
  const inputRef = useRef<ElementRef<"input">>(null);

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
      dispatch(filterCharacters({ name: getInputRefValue() }));
    },
    [ETypes.Episode]: () => {
      dispatch(filterEpisodes({ name: getInputRefValue() }));
    },
    [ETypes.Location]: () => {
      dispatch(filterLocations({ name: getInputRefValue() }));
    },
  };

  function getInputRefValue(): string {
    return inputRef.current?.value ?? "";
  }

  function changeType(e: ChangeEvent<HTMLSelectElement>): void {
    type.current = ETypes[e.target.value as keyof typeof ETypes];
  }

  function filterByType(): void {
    if (!getInputRefValue().trim()) return;
    actionsByType[type.current]();
  }

  function resetLists(): void {
    if (getInputRefValue().trim()) return;
    dispatch(firstCharacters());
    dispatch(firstEpisodes());
    dispatch(firstLocations());
  }

  return (
    <div className="w-full flex flex-col gap-3 md:max-w-[500px]">
      <label className="pui-field-group">
        <div className="pui-group-row">
          <select onChange={changeType} className="pui-input max-w-fit">
            <MoleculeFilterSearch.OptionsTypes />
          </select>

          <input
            ref={inputRef}
            onBlur={resetLists}
            type="search"
            aria-invalid={notFound || undefined}
            aria-describedby={notFound ? "filter-search-message" : undefined}
            className="pui-input w-1 flex-1"
            placeholder="Rick Sanchez"
          />
        </div>
        {notFound && <small id="filter-search-message">No results found</small>}
      </label>
      <button
        onClick={filterByType}
        className="pui-btn pui-solid pui-theme"
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
