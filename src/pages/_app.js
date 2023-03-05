import Layout from "../components/layout";
import "@/styles/globals.css";
import "@/styles/project.css";
import { Livvic, MuseoModerno } from "@next/font/google";

const livvic = Livvic({
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	variable: '--font-livvic'
});

const museoModerno = MuseoModerno({
	subsets: ["latin"],
	variable: '--font-museoModerno'
	
});

export default function App({ Component, pageProps }) {
	return (
		<>
			<style jsx global>{`
				:root {
					--font-livvic: ${livvic.style.fontFamily};
					--font-museoModerno: ${museoModerno.style.fontFamily};
				}
			`}</style>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
