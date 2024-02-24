import OrganismSectionHome from "./components/Organism.SectionHome";

export default function App() {
  return (
    <div className="p-10 xl:p-20 flex flex-col gap-10">
      <OrganismSectionHome />

      <button className="fixed bottom-10 right-10 btn btn-solid-error">
        Favoritos <i className="bi bi-heart-fill"></i>
      </button>
    </div>
  );
}
 