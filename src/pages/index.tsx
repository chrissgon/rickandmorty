import AtomFavoriteButton from "../components/Atom.FavoriteButton";
import OrganismCharacterCarousel from "../components/Organism.CharacterCarousel";
import OrganismEpisodeCarousel from "../components/Organism.EpisodeCarousel";
import OrganismLocationCarousel from "../components/Organism.LocationCarousel";
import TemplateHomeSection from "../components/Template.HomeSection";

export default function IndexPage() {
	return (
		<>
			<TemplateHomeSection />

			<AtomFavoriteButton className="md:hidden fixed bottom-10 right-10" />

			<OrganismCharacterCarousel />

			<OrganismEpisodeCarousel />

			<OrganismLocationCarousel />
		</>
	);
}
