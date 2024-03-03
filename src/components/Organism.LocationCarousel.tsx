import { Link } from "react-router-dom";
import { useAppSelector } from "../store";
import OrganismLocationCard from "./Organism.LocationCard";

export default function OrganismLocationCarousel() {
  const location = useAppSelector((state) => state.location.locations);
  return (
    <section id="locations" className="relative">
      <header className="flex justify-between items-center">
        <a href="#home" className="text-xl font-bold">
          <i className="bi-search text-base mr-2"></i>
          Locations
        </a>
        <Link to="/locations" className="btn btn-white">
          See all <i className="bi-chevron-right"></i>
        </Link>
      </header>
      <article className="overflow-x-auto snap-x snap-mandatory">
        <div className="flex gap-5 w-auto py-5">
          {location.map((location) => {
            return <OrganismLocationCard key={location.name} {...location} />;
          })}
        </div>
      </article>
    </section>
  );
}
