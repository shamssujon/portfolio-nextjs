import React from "react";
import { Code, Pen } from "../../components/Icons";

const Services = () => {
	return (
		<section id="Services" className="py-14 md:py-20 xl:py-28">
			<div className="container">
				<div className="grid gap-10 md:px-16 lg:grid-cols-8 xl:gap-20 xl:px-32">
					<div className="lg:col-span-3">
						<h2 className="font-serif text-4xl md:text-5xl 2xl:text-6xl">My services</h2>
					</div>
					<div className="lg:col-span-5 lg:mt-24">
						<div className="grid grid-cols-1 gap-12 md:grid-cols-2">
							<div className="space-y-8">
								<img src={Code} alt="" className="h-20 w-20" />
								<h4 className="text-2xl">Frontend Development</h4>
								<ul className="list-disc space-y-4 pl-2 marker:text-emerald-400 marker:content-['●']">
									<li className="pl-2">Convert PSD/XD/Figma files to HTML/CSS/JS.</li>
									<li className="pl-2">Build HTML templates for marketplace like ThemeForest.</li>
									<li className="pl-2">
										Build single or multi-page static websites such as online resumes, portfolio,
										blog, informational websites, landing page, etc.
									</li>
									<li className="pl-2">Build and customize Wordpress and Shopify themes</li>
								</ul>
							</div>
							<div className="space-y-8">
								<img src={Pen} alt="" className="h-20 w-20" />
								<h4 className="text-2xl">Web UI/UX Design</h4>
								<ul className="list-disc space-y-4 pl-2 marker:text-emerald-400 marker:content-['●']">
									<li className="pl-2">Web page design.</li>
									<li className="pl-2">Theme design (WordPress, Shopify, etc.)</li>
									<li className="pl-2">App design</li>
									<li className="pl-2">UX wireframing</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
