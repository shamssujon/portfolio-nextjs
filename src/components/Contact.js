import Image from "next/image";

const messageData = [
	{
		id: 1,
		title: "Whatsapp",
		icon: "/images/icons/brands/whatsapp.svg",
		url: "https://wa.me/8801780691149?text=Hello%20Shams...",
	},
	{
		id: 2,
		title: "Messenger",
		icon: "/images/icons/brands/messenger.svg",
		url: "https://m.me/the.shams.sujon/",
	},
	{
		id: 3,
		title: "Skype",
		icon: "/images/icons/brands/skype.svg",
		url: "https://join.skype.com/invite/glRGEZH28T2B",
	},
	{
		id: 4,
		title: "Email",
		icon: "/images/icons/brands/email.svg",
		url: "mailto:shams.sujon.01@gmail.com",
	},
];

const followData = [
	{
		id: 1,
		title: "Github",
		icon: "/images/icons/brands/github.svg",
		url: "https://github.com/shamssujon",
	},
	{
		id: 2,
		title: "Linkedin",
		icon: "/images/icons/brands/linkedin.svg",
		url: "https://www.linkedin.com/in/shamsulsujon/",
	},
	{
		id: 3,
		title: "Instagram",
		icon: "/images/icons/brands/instagram.svg",
		url: "https://www.instagram.com/shams.sujon/",
	},
	{
		id: 4,
		title: "Facebook",
		icon: "/images/icons/brands/facebook.svg",
		url: "https://www.facebook.com/the.shams.sujon/",
	},
];

const hireData = [
	{
		id: 1,
		title: "Upwork",
		icon: "/images/icons/brands/upwork.svg",
		url: "https://www.upwork.com/o/profiles/users/~0101b0c52a08b4411b/",
	},
	{
		id: 2,
		title: "Freelancer",
		icon: "/images/icons/brands/freelancer.svg",
		url: "#",
	},
	{
		id: 3,
		title: "Fiverr",
		icon: "/images/icons/brands/fiverr.svg",
		url: "#",
	},
];

const Contact = () => {
	return (
		<section id="Contact" className="py-14 md:py-20 xl:py-28">
			<div className="container grid grid-cols-12 gap-y-8 lg:gap-x-8">
				<div className="col-span-full sm:col-span-10 sm:col-start-2 lg:col-span-4 lg:col-start-2">
					<h2 className="col-span-2 font-serif text-5xl font-medium 2xl:text-6xl">Contact</h2>
				</div>
				<div className="col-span-full sm:col-span-10 sm:col-start-2 lg:col-span-6 lg:col-start-6 lg:mt-24">
					<div className="flex flex-col justify-between gap-12 md:flex-row">
						<div className="item">
							<h4 className="mb-8 font-serif text-2xl font-medium">Message me on</h4>
							<ul className="space-y-3">
								{messageData &&
									messageData.map((item) => (
										<li key={item.id}>
											<a
												target="_blank"
												rel="noreferrer"
												href={item.url}
												className="group flex items-center gap-4">
												<span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-emerald-400/40 p-2 transition group-hover:border-emerald-400 lg:h-14 lg:w-14">
													<Image
														src={item.icon}
														alt=""
														className="h-8 w-8"
														width={40}
														height={40}
													/>
												</span>
												<span className="text-lg font-medium transition group-hover:text-emerald-400">
													{item.title}
												</span>
											</a>
										</li>
									))}
							</ul>
						</div>
						<div className="item">
							<h4 className="mb-8 font-serif text-2xl font-medium">Follow me on</h4>
							<ul className="space-y-3">
								{followData &&
									followData.map((item) => (
										<li key={item.id}>
											<a
												target="_blank"
												rel="noreferrer"
												href={item.url}
												className="group flex items-center gap-4">
												<span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-emerald-400/40 p-2 transition group-hover:border-emerald-400 lg:h-14 lg:w-14">
													<Image
														src={item.icon}
														alt=""
														className="h-8 w-8"
														width={40}
														height={40}
													/>
												</span>
												<span className="text-lg font-medium transition group-hover:text-emerald-400">
													{item.title}
												</span>
											</a>
										</li>
									))}
							</ul>
						</div>
						<div className="item">
							<h4 className="mb-8 font-serif text-2xl font-medium">Hire me on</h4>
							<ul className="space-y-3">
								{hireData &&
									hireData.map((item) => (
										<li key={item.id}>
											<a
												target="_blank"
												rel="noreferrer"
												href={item.url}
												className="group flex items-center gap-4">
												<span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-emerald-400/40 p-2 transition group-hover:border-emerald-400 lg:h-14 lg:w-14">
													<Image
														src={item.icon}
														alt=""
														className="h-8 w-8"
														width={40}
														height={40}
													/>
												</span>
												<span className="text-lg font-medium transition group-hover:text-emerald-400">
													{item.title}
												</span>
											</a>
										</li>
									))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
