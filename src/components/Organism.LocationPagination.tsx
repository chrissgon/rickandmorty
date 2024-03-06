import { useEffect } from "react";
import {
  getLocations,
  setLocationPage,
  useAppDispatch,
  useAppSelector,
} from "../store";
import OrganismLocationList from "./Organism.LocationList";
import AtomPagination from "./Atom.Pagination";

export default function OrganismLocationPagination() {
  const dispatch = useAppDispatch();

  const page = useAppSelector((state) => state.location.page);
  const pages = useAppSelector((state) => state.location.pages);

  useEffect(() => {
    dispatch(getLocations(page));
  }, [dispatch, page]);

  return (
    <>
      <OrganismLocationList />
      <div className="flex justify-center">
        <AtomPagination
          change={(p) => dispatch(setLocationPage({ page: p }))}
          page={page}
          pages={pages}
        />
      </div>
    </>
  );
}
