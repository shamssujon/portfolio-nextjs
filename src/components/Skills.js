import React from "react";
import {
	Bootstrap,
	CSS3,
	Figma,
	Git,
	HTML5,
	JavaScript,
	Npm,
	Photoshop,
	ReactJS,
	TailwindCSS,
	VSCode,
	XD,
} from "../../components/Icons";

const Skills = () => {
	return (
		<section id="Skills" className="py-14 md:py-20 xl:py-28">
			<div className="container">
				<div className="grid gap-10 md:px-16 lg:grid-cols-8 xl:gap-20 xl:px-32">
					<div className="lg:col-span-3">
						<h2 className="font-serif text-4xl md:text-5xl 2xl:text-6xl">Skills</h2>
					</div>
					<div className="lg:col-span-5 lg:mt-24">
						<div className="grid gap-10 md:grid-cols-2">
							<div className="item">
								<h4 className="mb-6 text-2xl">Languages:</h4>
								<ul className="space-y-5">
									<li className="flex items-center gap-4">
										<img src={HTML5} alt="" className="h-10 w-10 object-contain" />
										<span>HTML</span>
									</li>
									<li className="flex items-center gap-4">
										<img src={CSS3} alt="" className="h-10 w-10 object-contain" />
										<span>CSS</span>
									</li>
									<li className="flex items-center gap-4">
										<img src={JavaScript} alt="" className="h-10 w-10 object-contain" />
										<span>Javascript</span>
									</li>
								</ul>
							</div>
							<div className="item">
								<h4 className="mb-6 text-2xl">Frameworks / Libraries:</h4>
								<ul className="space-y-5">
									<li className="flex items-center gap-4">
										<img src={ReactJS} alt="" className="h-10 w-10 object-contain" />
										<span>React JS</span>
									</li>
									<li className="flex items-center gap-4">
										<img src={Bootstrap} alt="" className="h-10 w-10 object-contain" />
										<span>Bootstrap</span>
									</li>
									<li className="flex items-center gap-4">
										<img src={TailwindCSS} alt="" className="h-10 w-10 object-contain" />
										<span>TailwindCSS</span>
									</li>
								</ul>
							</div>
							<div className="item">
								<h4 className="mb-6 text-2xl">Development Tools:</h4>
								<ul className="space-y-5">
									<li className="flex items-center gap-4">
										<img src={VSCode} alt="" className="h-10 w-10 object-contain" />
										<span>Visual Studio Code</span>
									</li>
									<li className="flex items-center gap-4">
										<img src={Git} alt="" className="h-10 w-10 object-contain" />
										<span>Git</span>
									</li>
									<li className="flex items-center gap-4">
										<img src={Npm} alt="" className="h-10 w-10 object-contain" />
										<span>NPM</span>
									</li>
								</ul>
							</div>
							<div className="item">
								<h4 className="mb-6 text-2xl">Design Tools:</h4>
								<ul className="space-y-5">
									<li className="flex items-center gap-4">
										<img src={Figma} alt="" className="h-10 w-10" />
										<span>Figma</span>
									</li>
									<li className="flex items-center gap-4">
										<img src={Photoshop} alt="" className="h-10 w-10 object-contain" />
										<span>Photoshop</span>
									</li>
									<li className="flex items-center gap-4">
										<img src={XD} alt="" className="h-10 w-10 object-contain" />
										<span>XD</span>
									</li>
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
