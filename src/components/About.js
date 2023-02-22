
export default function About() {
	return (
		<section id="About" className="py-14 md:py-20 xl:py-28">
			<div className="container">
				<div className="grid gap-10 md:px-16 lg:grid-cols-8 xl:gap-20 xl:px-32">
					<div className="lg:col-span-3">
						<h2 className="font-serif text-4xl md:text-5xl 2xl:text-6xl">About me</h2>
					</div>
					<div className="lg:col-span-5 lg:mt-24">
						<div className="space-y-4">
							<p className="text-base leading-relaxed md:text-xl md:leading-relaxed">
								I am Shamsul Islam Sujon from Kushtia, Bangladesh. My academic background is
								Bachelor&apos;s in Computer Science. Have been working as a freelance Front-end Web
								Developer since 2016.
							</p>
							<p className="text-base leading-relaxed md:text-xl md:leading-relaxed">
								The technologies I mostly work with are <strong className="font-semibold">HTML</strong>,{" "}
								<strong className="font-semibold">CSS</strong>,{" "}
								<strong className="font-semibold">Javascript</strong>,{" "}
								<strong className="font-semibold">React</strong>,{" "}
								<strong className="font-semibold">TailwindCSS</strong>,{" "}
								<strong className="font-semibold">Bootstrap</strong>, etc. I am skilled in building{" "}
								<strong className="font-semibold">static</strong> and{" "}
								<strong className="font-semibold">MERN-stack</strong> websites. Also familiar with{" "}
								<strong className="font-semibold">Wordpress </strong> theme customization and{" "}
								<strong className="font-semibold">Shopify</strong> theme development.
							</p>
							<p className="text-base leading-relaxed md:text-xl md:leading-relaxed">
								In addition, I have an interest in designing user interfaces and improving existing
								designs. I often design UI with Figma and CSS. Sometimes study UX and try to improve the
								visual aesthetics of designs.
							</p>
						</div>
						<div className="mt-8">
							<a
								href="https://drive.google.com/file/d/1RGw9tDN1LAnE5qf75J4_LEjCzXdiHbHT/view?usp=share_link"
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center justify-center gap-2 rounded bg-emerald-500 px-8 py-4 text-center font-semibold uppercase tracking-wide text-white transition hover:bg-emerald-600">
								Download Resume
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
