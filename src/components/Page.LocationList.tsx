import { useAppSelector } from "../store";
import OrganismLocationCard from "./Organism.LocationCard";

export default function PageLocationList() {
  const location = useAppSelector((state) => state.location.locations);
  return (
    <section className="relative">
      <header className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Locations</h2>
        <button className="btn btn-white">
          See all <i className="bi-chevron-right"></i>
        </button>
      </header>
      <article className="overflow-x-auto max-w-screen">
        <div className="flex gap-5 w-auto py-5">
          {location.map((location) => {
            return <OrganismLocationCard key={location.id} {...location} />;
          })}
        </div>
      </article>
    </section>
  );
}
