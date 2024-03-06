import { useEffect } from "react";
import AtomPagination from "../components/Atom.Pagination";
import OrganismLocationList from "../components/Organism.LocationList";
import TemplateFavoriteSection from "../components/Template.FavoriteSection";
import {
  getLocations,
  setLocationPage,
  useAppDispatch,
  useAppSelector,
} from "../store";

export default function LocationsPage() {
  const page = useAppSelector((state) => state.location.page);
  const pages = useAppSelector((state) => state.location.pages);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLocations(page));
  }, [dispatch, page]);

  return (
    <>
      <TemplateFavoriteSection>
        See the craziest and strangest places in Rick and Morty
      </TemplateFavoriteSection>
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
