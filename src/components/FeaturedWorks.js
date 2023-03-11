import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function FeaturedWorks() {
	const { data: projects, error, isLoading } = useSwr("/api/projects", fetcher);
	if (error) return <div>Failed to load projects</div>;
	if (isLoading) return <div>Loading...</div>;
	if (!projects) return null;

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
									<ProjectCard key={project.id} project={project}></ProjectCard>
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
}
