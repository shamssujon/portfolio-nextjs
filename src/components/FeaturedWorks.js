import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import Spinner from "../../components/Spinner";
import { BiErrorAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const FeaturedWorks = () => {
	const [projectLoadingError, setProjectLoadingError] = useState(null);

	const {
		data: projects,
		isLoading: loadingProjects,
		error: projectsError,
	} = useQuery({
		queryKey: ["projectsData"],
		queryFn: async () => {
			try {
				const response = await axios.get("https://portfolio-react-server.vercel.app/projects");
				console.log(response.data);
				return response.data;
			} catch (error) {
				console.error(error);
				setProjectLoadingError(error.message);
			}
		},
	});

	return (
		<section id="FeaturedWorks" className="py-14 md:py-20 xl:py-28">
			<div className="container">
				<div className="grid gap-10 md:px-16 lg:grid-cols-8 xl:gap-20 xl:px-32">
					<div className="lg:col-span-3">
						<h2 className="font-serif text-4xl md:text-5xl 2xl:text-6xl">Works</h2>
					</div>
					<div className="lg:col-span-5 lg:mt-24">
						{loadingProjects ? (
							<Spinner />
						) : projectsError ? (
							<div
								class="flex items-center gap-2 rounded-lg border border-rose-200 bg-red-100 py-5 px-6 text-rose-700"
								role="alert">
								<BiErrorAlt />
								{projectLoadingError}
							</div>
						) : (
							<div className="space-y-14 md:space-y-20">
								{projects.map((project) => (
									<ProjectCard key={project.slug} project={project}></ProjectCard>
								))}
							</div>
						)}

						{/* <div className="mt-20 text-center">
							<Link
								to="/projects"
								className="inline-flex items-center justify-center gap-2 rounded bg-emerald-500 px-8 py-4 text-center font-semibold uppercase tracking-wide text-white transition hover:bg-emerald-600">
								Browse all projects
							</Link>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedWorks;
