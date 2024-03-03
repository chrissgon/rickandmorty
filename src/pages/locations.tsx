import AtomPagination from "../components/Atom.Pagination";
import OrganismLocationList from "../components/Organism.LocationList";
import { setLocationPage, useAppDispatch, useAppSelector } from "../store";

export default function LocationsPage() {
  const page = useAppSelector((state) => state.location.page);
  const pages = useAppSelector((state) => state.location.pages);

  const dispatch = useAppDispatch();

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
