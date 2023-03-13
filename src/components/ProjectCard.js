import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
	const { slug, title, images, overview, tags } = project;

	return (
		<div className="group relative">
			<div className="shadow-lg transition group-hover:shadow-xl">
				<div className="flex items-center justify-end gap-3 rounded-t-lg border-2 border-slate-700 bg-slate-700 p-4">
					<div className="h-2 w-2 rounded-full bg-green-400"></div>
					<div className="h-2 w-2 rounded-full bg-yellow-400"></div>
					<div className="h-2 w-2 rounded-full bg-red-400"></div>
				</div>
				<div className="relative overflow-hidden">
					<Image
						className="aspect-4/3 h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
						src={images.cover}
						alt={title}
						width={750}
						height={550}
					/>
				</div>
			</div>
			<div className="flex w-full items-center justify-between pt-6">
				<div className="space-y-4">
					<h4 className="text-2xl font-serif font-medium transition group-hover:text-emerald-400">{title}</h4>
					<p className="flex flex-wrap gap-2">
						{tags.map((item, index) => (
							<span
								key={index}
								className="rounded-full bg-slate-500/10 py-1 px-2 text-sm font-normal leading-none">
								{item}
							</span>
						))}
					</p>
				</div>
				<Link
					href={`works/${slug}`}
					className="text-4xl after:absolute after:top-0 after:left-0 after:h-full after:w-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-12 w-12 transition group-hover:-rotate-45 group-hover:text-emerald-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="1">
						<path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</Link>
			</div>
		</div>
	);
};

export default ProjectCard;
