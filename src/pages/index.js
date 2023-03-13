import About from "@/components/About";
import Contact from "@/components/Contact";
import FeaturedWorks from "@/components/FeaturedWorks";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Shamsul Islam Sujon | Frontend Developer</title>
				<meta
					name="description"
					content="Check out Shamsul Islam Sujon's portfolio website and discover his passion for frontend development. From responsive web design to modern user interfaces, he create engaging and accessible websites that deliver results. Explore his latest projects and get in touch to start your next web development project today."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
			</Head>
			<main>
				<Intro />
				<About />
				<Services />
				<Skills />
				<FeaturedWorks />
				<Testimonials />
			</main>
		</>
	);
}
