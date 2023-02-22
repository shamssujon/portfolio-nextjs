import Image from "next/image";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

export default function Intro() {
	return (
		<section className="pt-2 pb-14 md:pt-10 md:pb-20 2xl:py-28">
			<div className="container">
				<div className="grid items-center gap-10 lg:grid-cols-2 xl:gap-20 xl:px-32">
					<div className="">
						<div className="relative mx-auto aspect-square max-w-lg overflow-hidden rounded-full border-4 border-emerald-400/50 xl:border-8">
							<Image src="/images/portrait.jpg" alt="Sujon portrait" className="h-full w-full object-cover" width={600} height={600} />
						</div>
					</div>
					<div className="">
						<div className="text-center lg:text-left">
							<h3 className="mb-4 text-2xl md:text-4xl">Shamsul Islam Sujon</h3>
							<h1 className="font-serif text-6xl leading-[1.2] lg:-ml-2 lg:text-8xl lg:leading-[1.15] 2xl:text-[110px] 2xl:tracking-tight">
								Front-end Developer
							</h1>
							<ul className="mt-10 flex items-center justify-center gap-8 lg:justify-start lg:gap-8">
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://www.linkedin.com/in/shamssujon/"
										className="grid h-14 w-14 place-content-center rounded-full bg-emerald-500/10 p-3 text-4xl text-slate-800 transition hover:bg-emerald-500 hover:text-white">
										<GrLinkedinOption className="relative -top-0.5" />
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://github.com/shamssujon"
										className="grid h-14 w-14 place-content-center rounded-full bg-emerald-500/10 p-3 text-4xl text-slate-800 transition hover:bg-emerald-500 hover:text-white">
										<BsGithub />
									</a>
								</li>
								<li>
									<a
										target="_blank"
										rel="noreferrer"
										href="https://www.instagram.com/shams.sujon/"
										className="grid h-14 w-14 place-content-center rounded-full bg-emerald-500/10 p-3 text-4xl text-slate-800 transition hover:bg-emerald-500 hover:text-white">
										<BsInstagram />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
