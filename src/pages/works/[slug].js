import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import useSWR from "swr";
import Link from "next/link";

const fetcher = async (url) => {
	const res = await fetch(url);
	const data = await res.json();

	if (res.status !== 200) {
		throw new Error(data.message);
	}
	return data;
};

export default function ProjectPage() {
	const [openGalleryPopup, setOpenGalleryPopup] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const { query } = useRouter();
	const { data, error, isLoading, isValidating } = useSWR(
		() => (query.slug ? `/api/projects/${query.slug}` : null),
		fetcher
	);

	if (error) return <div>{error.message}</div>;
	if (isLoading) return <div>Loading...</div>;
	if (!data) return null;

	// console.log(data.project);

	const { title, overview, technologies, meta, url, images } = data.project;

	return (
		<section className="py-14 md:py-20 xl:py-28">
			<div className="container">
				<div className="grid gap-10 md:px-16 lg:grid-cols-8 xl:gap-20 xl:px-32">
					<div className="lg:col-span-3">
						<div className="sticky top-20 space-y-10">
							<Link
								href="/#Works"
								className="inline-flex items-center justify-center gap-2 rounded border border-transparent px-4 py-2 text-center transition hover:border-emerald-400">
								<BsArrowLeft />
								<span>Go back</span>
							</Link>
							<h2 className="font-serif text-4xl font-medium md:text-5xl 2xl:text-6xl 2xl:leading-tight">
								{title}
							</h2>
							<table className="w-full border-collapse text-lg">
								<tbody className="divide-y-2">
									<tr>
										<td className="p-2 font-medium">Role: </td>
										<td className="p-2">{meta.role[0]}</td>
									</tr>
									<tr>
										<td className="p-2 font-medium">Client:</td>
										<td className="p-2">
											<a
												href={meta.client.url ? meta.client.url : "#"}
												className={`font-medium underline underline-offset-4 ${
													!meta.client.url
														? "pointer-events-none font-normal no-underline"
														: ""
												}`}>
												{meta.client.name}
											</a>
										</td>
									</tr>
									<tr>
										<td className="p-2 font-medium">Timeline: </td>
										<td className="p-2">
											{meta.timeline.start} - {meta.timeline.end}
										</td>
									</tr>
								</tbody>
							</table>

							<div className="not-prose">
								<a
									href={url.live}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center justify-center gap-2 rounded bg-emerald-500 px-8 py-4 text-center font-semibold uppercase tracking-wide text-white transition hover:bg-emerald-600">
									View Demo
								</a>
							</div>
						</div>
					</div>
					<div className="lg:col-span-5">
						<article className="prose lg:prose-xl">
							<Image
								src={images.cover}
								alt=""
								width={1500}
								height={5000}
								className="h-auto w-full border shadow-lg"
							/>
							<h3 className="font-serif">Overview</h3>
							<p className="">{overview}</p>
							<h3 className="font-serif">Tech Stack</h3>
							<ul className="grid grid-cols-2">
								{technologies.map((t, index) => (
									<li key={index}>{t}</li>
								))}
								<li>and more.</li>
							</ul>
							<h3 className="font-serif">Gallery</h3>
							<div className="not-prose grid grid-cols-2 gap-6 lg:gap-8">
								{images.gallery.map((item, index) => (
									<div key={index} className="">
										<div
											className="group relative aspect-square overflow-hidden border shadow-lg"
											onClick={() => {
												setOpenGalleryPopup(true);
												setCurrentImageIndex(index);
											}}>
											<Image
												src={item.src}
												alt=""
												width={500}
												height={500}
												className="absolute inset-0 h-full w-full cursor-zoom-in object-cover object-top transition-all group-hover:object-bottom group-hover:duration-[3000ms]"
											/>
										</div>
										<h6 className="mt-2 lg:mt-4 font-serif font-medium">{item.title}</h6>
									</div>
								))}
							</div>
							<Lightbox
								open={openGalleryPopup}
								close={() => setOpenGalleryPopup(false)}
								index={currentImageIndex}
								slides={images.gallery}
								animation={{ fade: 500, swipe: 300 }}
								plugins={[Zoom, Thumbnails, Captions]}
								styles={{
									container: { backgroundColor: "rgba(0, 0, 0, .95)" },
									captionsTitleContainer: { backgroundColor: "transparent" },
								}}
							/>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
}
