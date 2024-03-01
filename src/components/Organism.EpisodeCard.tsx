import { IEpisode } from "../store";

export default function OrganismEpisodeCard(props: IEpisode) {
  return (
    <div className="relative card w-full h-fit max-w-[250px] min-w-[250px]">
      <article className="card-content">
        {/* header */}
        <header className="flex gap-4 justify-between items-center">
          <i className="bi bi-collection-play text-lg"></i>
          <h4 className="flex-1">
            <p className="max-w-[130px] font-bold whitespace-nowrap overflow-hidden text-ellipsis">
              {props.name}
            </p>
            <p>{props.episode}</p>
          </h4>
          <i className="bi-heart text-error text-xl cursor-pointer"></i>
        </header>

        {/* button */}
        <button className="btn btn-white w-full mt-2">View details</button>
      </article>
    </div>
  );
}
