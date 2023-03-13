import Image from "next/image";

const servicesData = [
	{
		id: 1,
		title: "Frontend Development",
		icon: "/images/icons/services/code.svg",
		serviceFeatures: [
			"Convert PSD/XD/Figma files to HTML/CSS/JS.",
			"Build HTML templates for marketplace like ThemeForest.",
			"Build single or multi-page static websites such as online resumes, portfolio, blog, informational websites, landing page, etc.",
			"Build and customize Wordpress and Shopify themes.",
		],
	},
	{
		id: 2,
		title: "Web UI/UX Design",
		icon: "/images/icons/services/pen.svg",
		serviceFeatures: [
			"Web page design.",
			"Theme design (WordPress, Shopify, etc.)",
			"App design",
			"UX Prototyping",
			"Wireframing",
		],
	},
];

export default function Services() {
	return (
		<section id="Services" className="py-14 md:py-20 xl:py-28">
			<div className="container">
				<div className="grid gap-10 md:px-16 lg:grid-cols-8 xl:gap-20 xl:px-32">
					<div className="lg:col-span-3">
						<h2 className="font-serif text-4xl font-medium md:text-5xl 2xl:text-6xl">Services</h2>
					</div>
					<div className="lg:col-span-5 lg:mt-24">
						<div className="grid grid-cols-1 gap-12 md:grid-cols-2">
							{servicesData.map((service) => (
								<div className="space-y-8" key={service.id}>
									<Image
										src={service.icon}
										alt={`${service.title} icon`}
										className="h-20 w-20"
										width={80}
										height={80}
									/>
									<h4 className="font-serif text-2xl font-semibold">{service.title}</h4>
									<ul className="list-disc space-y-4 pl-2 marker:text-emerald-400 marker:content-['●']">
										{service.serviceFeatures.map((serviceFeatureItem, index) => (
											<li key={index} className="pl-2">
												{serviceFeatureItem}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
