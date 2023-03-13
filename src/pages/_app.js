import Layout from "../components/layout";
import "@/styles/globals.css";
import "@/styles/project.css";
import { Livvic, MuseoModerno } from "@next/font/google";

const livvic = Livvic({
	variable: "--font-livvic",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
});

const museoModerno = MuseoModerno({
	variable: "--font-museoModerno",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
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
