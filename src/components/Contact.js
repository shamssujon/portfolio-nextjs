import React from "react";
import {
	Facebook,
	Fiverr,
	Freelancer,
	Github,
	Gmail,
	Instagram,
	Linkedin,
	Messenger,
	Skype,
	Upwork,
	Whatsapp
} from "../../components/Icons";

const Contact = () => {
	return (
		<section id="Contact" className="py-14 md:py-20 xl:py-28">
			<div className="container grid grid-cols-12 gap-y-8 lg:gap-x-8">
				<div className="col-span-full sm:col-span-10 sm:col-start-2 lg:col-span-4 lg:col-start-2">
					<h2 className="col-span-2 font-serif text-5xl 2xl:text-6xl">Contact</h2>
				</div>
				<div className="col-span-full sm:col-span-10 sm:col-start-2 lg:col-span-6 lg:col-start-6 lg:mt-24">
					<div className="flex flex-col justify-between gap-12 md:flex-row">
						<div className="item">
							<h4 className="mb-6 text-2xl">Message me on</h4>
							<ul className="space-y-5">
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://wa.me/8801780691149?text=Hello%20Shams..."
										className="flex items-center gap-4">
										<img src={Whatsapp} alt="" className="w-10" />
										<span>Whatsapp</span>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://m.me/the.shams.sujon/"
										className="flex items-center gap-4">
										<img src={Messenger} alt="" className="w-10" />
										<span>Messenger</span>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://join.skype.com/invite/glRGEZH28T2B"
										className="flex items-center gap-4">
										<img src={Skype} alt="" className="w-10" />
										<span>Skype</span>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="mailto:shams.sujon.01@gmail.com"
										className="flex items-center gap-4">
										<img src={Gmail} alt="" className="w-10" />
										<span>Email</span>
									</a>
								</li>
							</ul>
						</div>
						<div className="item">
							<h4 className="mb-6 text-2xl">Follow me on</h4>
							<ul className="space-y-5">
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://github.com/shamssujon"
										className="flex items-center gap-4">
										<img src={Github} alt="" className="w-10" />
										<span>Github</span>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://www.linkedin.com/in/shamsulsujon/"
										className="flex items-center gap-4">
										<img src={Linkedin} alt="" className="w-10" />
										<span>Linkedin</span>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://www.instagram.com/shams.sujon/"
										className="flex items-center gap-4">
										<img src={Instagram} alt="" className="w-10" />
										<span>Instagram</span>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://www.facebook.com/the.shams.sujon/"
										className="flex items-center gap-4">
										<img src={Facebook} alt="" className="w-10" />
										<span>Facebook</span>
									</a>
								</li>
							</ul>
						</div>
						<div className="item">
							<h4 className="mb-6 text-2xl">Hire me on</h4>
							<ul className="space-y-5">
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://www.upwork.com/o/profiles/users/~0101b0c52a08b4411b/"
										className="flex items-center gap-4">
										<img src={Upwork} alt="" className="w-10" />
										<span>Upwork</span>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="/"
										className="pointer-events-none flex items-center gap-4 opacity-50">
										<img src={Freelancer} alt="" className="w-10" />
										<span>Freelancer</span>
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="/"
										className="pointer-events-none flex items-center gap-4 opacity-50">
										<img src={Fiverr} alt="" className="w-10" />
										<span>Fiverr</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
