import { useAppSelector } from "../store";
import OrganismLocationCard from "./Organism.LocationCard";

export default function OrganismLocationList() {
  const locations = useAppSelector((state) => state.location.locations);
  return (
    <article className="flex flex-wrap gap-5 justify-start items-start">
      {locations.map((location) => {
        return (
          <OrganismLocationCard
            className="flex-[230px] sm:max-w-[300px]"
            key={location.id}
            location={location}
          />
        );
      })}
    </article>
  );
}
