import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const FeaturedWorks = () => {
	// const [projectLoadingError, setProjectLoadingError] = useState(null);

	// const {
	// 	data: projects,
	// 	isLoading: loadingProjects,
	// 	error: projectsError,
	// } = useQuery({
	// 	queryKey: ["projectsData"],
	// 	queryFn: async () => {
	// 		try {
	// 			const response = await axios.get("https://portfolio-react-server.vercel.app/projects");
	// 			console.log(response.data);
	// 			return response.data;
	// 		} catch (error) {
	// 			console.error(error);
	// 			setProjectLoadingError(error.message);
	// 		}
	// 	},
	// });

	const projects = [
		{
			slug: "reboot",
			title: "Reboot",
			thumbnail: "/images/works/reboot.png",
			description:
				"Reboot is a pre-owned online computer market built to connect buyers and sellers to buy/sell their used computer gadgets.",
			technologies: ["React", "TailwindCSS", "Node JS", "Express JS", "MongoDB"],
			url: "https://reboot-9dfe1.web.app/",
		},
		{
			slug: "tsl",
			title: "TSL website redesign",
			thumbnail: "/images/works/tsl/tsl-cover.jpg",
			description:
				"Technological Solutions Limited wanted to update their website design. I have redesigned the website pages with Bootstrap 5.",
			technologies: ["HTML", "SCSS", "JS", "UI/UX", "Website redesign"],
			url: "https://tsl-home-new.shamssujon.com/",
		},
		{
			slug: "covira",
			title: "Covira",
			thumbnail: "/images/works/tsl/tsl-cover.jpg",
			description:
				"Covira is a Corona virus prevention and awareness template which is listed on Themeforest. I have coded the provided design to HTML5 template.",
			technologies: ["HTML", "CSS", "JS", "PSD to HTML", "Themeforest"],
			url: "https://themeforest.net/item/covira-coronavirus-prevention-template/26492606",
		},
	];

	return (
		<section id="Works" className="py-14 md:py-20 xl:py-28">
			<div className="container">
				<div className="grid gap-10 md:px-16 lg:grid-cols-8 xl:gap-20 xl:px-32">
					<div className="lg:col-span-3">
						<h2 className="font-serif text-4xl md:text-5xl 2xl:text-6xl">Works</h2>
					</div>
					<div className="lg:col-span-5 lg:mt-24">
						<div className="space-y-14 md:space-y-20">
							{projects &&
								projects.map((project) => (
									<ProjectCard key={project.slug} project={project}></ProjectCard>
								))}
						</div>

						<div className="mt-20 text-center">
							<Link
								href="/works"
								className="inline-flex items-center justify-center gap-2 rounded bg-emerald-500 px-8 py-4 text-center font-semibold uppercase tracking-wide text-white transition hover:bg-emerald-600">
								Browse all projects
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedWorks;
