import Image from "next/image";

const testimonialData = [
	{
		id: 1,
		content: "Shamsul is best UI developer/designer I have worked with so far on Upwork. He never disappoints.",
		author: {
			name: "Adrian Gordon",
			designation: "Owner",
			brand: "adriangordon.me",
			image: "/images/clients/adrian.jpg",
		},
	},
	{
		id: 2,
		content:
			"He did not only deliver what was asked, but also made some improvements that showed, he is not only skilled in technical implementation, but also has an eye for good design. He is also quick in making changes. Always friendly and well spoken.",
		author: {
			name: "Philipp Gassmann",
			designation: "Project Manager",
			brand: "Kreis für natürliche Lebenshilfe e. V.",
			image: "/images/clients/philipp.jpg",
		},
	},
	{
		id: 3,
		content:
			"He is on time, communicates regularly and thinks like an end user to provide all options needed. He also links all pages so you can see everything. His quality for responsiveness in form of html/css files is great. You will not regret.",
		author: {
			name: "Dhaval Shah",
			designation: "Co-Founder",
			brand: "RoboNegotiator",
			image: "/images/clients/dhaval_shah.jpg",
		},
	},
];

export default function Testimonials() {
	return (
		<section className="py-14 md:py-20 xl:py-28">
			<div className="container">
				<div className="grid gap-10 md:px-16 lg:grid-cols-8 xl:gap-20 xl:px-32">
					<div className="lg:col-span-3">
						<h2 className="font-serif text-4xl md:text-5xl 2xl:text-6xl">Testimonials</h2>
					</div>
					<div className="lg:col-span-5 lg:mt-24">
						<div className="space-y-12 divide-y-2 divide-emerald-400/20">
							{testimonialData &&
								testimonialData.map((testimonialItem) => (
									<div key={testimonialItem.id} className="pt-12 first-of-type:pt-0">
										<p className="text-xl xl:text-2xl xl:leading-normal">
											{testimonialItem.content}
										</p>
										<div className="mt-6 flex items-center gap-5">
											<Image
												src={testimonialItem.author.image}
												alt={`${testimonialItem.author.name} photo`}
												className="h-20 w-20 rounded-full border-4 border-emerald-400/50 object-cover"
												width={80}
												height={80}
											/>
											<div>
												<h5 className="text-lg font-medium">{testimonialItem.author.name}</h5>
												<p className="opacity-80">
													{testimonialItem.author.designation} of{" "}
													{testimonialItem.author.brand}
												</p>
											</div>
										</div>
									</div>
								))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
