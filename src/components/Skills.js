import Image from "next/image";

const languages = [
	{ title: "HTML", icon: "/images/tools/html5.svg" },
	{ title: "CSS", icon: "/images/tools/css3.svg" },
	{ title: "Javascript", icon: "/images/tools/javascript.svg" },
];

const frameworks = [
	{ title: "HTML", icon: "/images/tools/html5.svg" },
	{ title: "CSS", icon: "/images/tools/css3.svg" },
	{ title: "Javascript", icon: "/images/tools/javascript.svg" },
	{ title: "Bootstrap", icon: "/images/tools/bootstrap5.svg" },
	{ title: "TailwindCSS", icon: "/images/tools/tailwindcss.svg" },
	{ title: "React JS", icon: "/images/tools/react.svg" },
	{ title: "Next JS", icon: "/images/tools/nextjs.svg" },
	{ title: "Node JS", icon: "/images/tools/nodejs.svg" },
	{ title: "Express JS", icon: "/images/tools/expressjs.svg" },
	{ title: "Alpine JS", icon: "/images/tools/alpinejs.svg" },
	{ title: "jQuery", icon: "/images/tools/jquery.svg" },
	{ title: "MongoDB", icon: "/images/tools/mongodb.svg" },
	{ title: "Visual Studio Code", icon: "/images/tools/vscode.svg" },
	{ title: "Git", icon: "/images/tools/git.svg" },
	{ title: "Gulp", icon: "/images/tools/gulp.svg" },
	{ title: "Vite", icon: "/images/tools/vite.svg" },
	{ title: "NPM", icon: "/images/tools/npm.svg" },
];

const devTools = [
	{ title: "Visual Studio Code", icon: "/images/tools/vscode.svg" },
	{ title: "Git", icon: "/images/tools/git.svg" },
	{ title: "Gulp", icon: "/images/tools/gulp.svg" },
	{ title: "Vite", icon: "/images/tools/vite.svg" },
	{ title: "NPM", icon: "/images/tools/npm.svg" },
];

const designTools = [
	{ title: "Figma", icon: "/images/tools/figma.svg" },
	{ title: "XD", icon: "/images/tools/xd.svg" },
	{ title: "Photoshop", icon: "/images/tools/photoshop.svg" },
	{ title: "Illustrator", icon: "/images/tools/illustrator.svg" },
];

const Skills = () => {
	return (
		<section id="Skills" className="py-14 md:py-20 xl:py-28">
			<div className="container">
				<div className="grid gap-10 md:px-16 lg:grid-cols-8 xl:gap-20 xl:px-32">
					<div className="lg:col-span-3">
						<h2 className="font-serif text-4xl md:text-5xl 2xl:text-6xl">Skills</h2>
					</div>
					<div className="lg:col-span-5 lg:mt-24">
						<div className="grid gap-12 divide-y-2">
							{/* <div className="">
								<h4 className="mb-8 font-serif text-2xl font-semibold">Languages</h4>
								<ul className="flex flex-wrap items-center gap-8">
									{languages &&
										languages.map((item, index) => (
											<li className="flex items-center gap-4" key={index}>
												<Image
													src={item.icon}
													alt=""
													className="h-10 w-10"
													width={40}
													height={40}
												/>
												<span className="text-lg font-medium">{item.title}</span>
											</li>
										))}
								</ul>
							</div> */}
							<div className="pt-12">
								<h4 className="mb-8 font-serif text-2xl font-semibold">Development</h4>
								<ul className="flex flex-wrap items-center gap-8">
									{frameworks &&
										frameworks.map((item, index) => (
											<li className="flex items-center gap-4" key={index}>
												<Image
													src={item.icon}
													alt=""
													className="h-10 w-10"
													width={40}
													height={40}
												/>
												<span className="text-lg font-medium">{item.title}</span>
											</li>
										))}
								</ul>
							</div>
							{/* <div className="pt-12">
								<h4 className="mb-8 font-serif text-2xl font-semibold">Development Tools</h4>
								<ul className="flex flex-wrap items-center gap-8">
									{devTools &&
										devTools.map((item, index) => (
											<li className="flex items-center gap-4" key={index}>
												<Image
													src={item.icon}
													alt=""
													className="h-10 w-10"
													width={40}
													height={40}
												/>
												<span className="text-lg font-medium">{item.title}</span>
											</li>
										))}
								</ul>
							</div> */}
							<div className="pt-12">
								<h4 className="mb-8 font-serif text-2xl font-semibold">Design</h4>
								<ul className="flex flex-wrap items-center gap-8">
									{designTools &&
										designTools.map((item, index) => (
											<li className="flex items-center gap-4" key={index}>
												<Image
													src={item.icon}
													alt=""
													className="h-10 w-10"
													width={40}
													height={40}
												/>
												<span className="text-lg font-medium">{item.title}</span>
											</li>
										))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
