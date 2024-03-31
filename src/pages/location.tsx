import { useParams } from "react-router-dom";
import { getLocation, useAppDispatch, useAppSelector } from "../store";
import { useEffect } from "react";
import OrganismPageLayout from "../components/Organism.PageLayout";

export default function LocationPage() {
  // data
  const params = useParams();
  const dispatch = useAppDispatch();

  const location = useAppSelector((state) => state.location.location);

  // hooks
  useEffect(() => {
    dispatch(getLocation(params.id!));
  }, [dispatch, params]);

  return (
    <>
      <OrganismPageLayout>{JSON.stringify(location)}</OrganismPageLayout>
    </>
  );
}
