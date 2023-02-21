import React from "react";
import AdrianPhoto from "../../assets/img/clients/adrian.jpg";
import DhavalShahPhoto from "../../assets/img/clients/dhaval_shah.jpg";
import PhilippPhoto from "../../assets/img/clients/philipp.jpg";

const Testimonials = () => {
	return (
		<section className="py-14 md:py-20 xl:py-28">
			<div className="container">
				<div className="grid gap-10 md:px-16 lg:grid-cols-8 xl:gap-20 xl:px-32">
					<div className="lg:col-span-3">
						<h2 className="font-serif text-4xl md:text-5xl 2xl:text-6xl">Testimonials</h2>
					</div>
					<div className="lg:col-span-5 lg:mt-24">
						<div className="space-y-12">
							<div>
								<p className="text-xl xl:text-2xl xl:leading-normal">
									Shamsul is best UI developer/designer I have worked with so far on Upwork. He never
									disappoints.
								</p>
								<div className="mt-6 flex items-center gap-5">
									<img
										src={AdrianPhoto}
										alt=""
										className="h-20 w-20 rounded-full border-4 border-emerald-400/50 object-cover"
									/>
									<div>
										<h5 className="text-lg font-medium">Adrian Gordon</h5>
										<p className="opacity-80">adriangordon.me</p>
									</div>
								</div>
							</div>
							<hr />
							<div>
								<p className="text-xl xl:text-2xl xl:leading-normal">
									He did not only deliver what was asked, but also made some improvements that showed,
									he is not only skilled in technical implementation, but also has an eye for good
									design. He is also quick in making changes. Always friendly and well spoken
								</p>
								<div className="mt-6 flex items-center gap-5">
									<img
										src={PhilippPhoto}
										alt=""
										className="h-20 w-20 rounded-full border-4 border-emerald-400/50 object-cover"
									/>
									<div>
										<h5 className="text-lg font-medium">Philipp Gassmann</h5>
										<p className="opacity-80">Kreis für natürliche Lebenshilfe e. V.</p>
									</div>
								</div>
							</div>
							<hr />
							<div>
								<p className="text-xl xl:text-2xl xl:leading-normal">
									He is on time, communicates regularly and thinks like an end user to provide all
									options needed. He also links all pages so you can see everything. His quality for
									responsiveness in form of html/css files is great. You will not regret.
								</p>
								<div className="mt-6 flex items-center gap-5">
									<img
										src={DhavalShahPhoto}
										alt=""
										className="h-20 w-20 rounded-full border-4 border-emerald-400/50 object-cover"
									/>
									<div>
										<h5 className="text-lg font-medium">Dhaval Shah</h5>
										<p className="opacity-80">RoboNegotiator</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
