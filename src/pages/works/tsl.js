import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

const images = [
	{
		src: "/images/works/tsl/homepage.png",
		title: "Homepage",
	},
	{
		src: "/images/works/tsl/about.png",
		title: "About",
	},
	{
		src: "/images/works/tsl/blog.png",
		title: "Blog",
	},
	{
		src: "/images/works/tsl/article.png",
		title: "Article",
	},
	{
		src: "/images/works/tsl/article-elements.png",
		title: "Article Elements",
	},
	{
		src: "/images/works/tsl/service-layout-1.png",
		title: "Service Layout 1",
	},
	{
		src: "/images/works/tsl/service-layout-2.png",
		title: "Service Layout 2",
	},
	{
		src: "/images/works/tsl/service-layout-3.png",
		title: "Service Layout 3",
	},
	{
		src: "/images/works/tsl/service-layout-4.png",
		title: "Service Layout 4",
	},
	{
		src: "/images/works/tsl/contact.png",
		title: "Contact",
	},
];

export default function Tsl() {
	const [openGalleryPopup, setOpenGalleryPopup] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	return (
		<section id="FeaturedWorks" className="py-14 md:py-20 xl:py-28">
			<div className="container">
				<div className="grid gap-10 md:px-16 lg:grid-cols-8 xl:gap-20 xl:px-32">
					<div className="lg:col-span-3">
						<div className="sticky top-10 space-y-10">
							<h2 className="font-serif text-4xl font-medium md:text-5xl 2xl:text-6xl 2xl:leading-tight">
								Technological Solutions Limited
							</h2>
							<table className="w-full border-collapse text-lg">
								<tbody className="divide-y-2">
									<tr>
										<td className="p-2 font-medium">Role: </td>
										<td className="p-2">Website Redesign</td>
									</tr>
									<tr>
										<td className="p-2 font-medium">Client:</td>
										<td className="p-2">
											<a href="#" className="font-medium underline underline-offset-4">
												Adrian Gordon
											</a>
										</td>
									</tr>
									<tr>
										<td className="p-2 font-medium">Timeline: </td>
										<td className="p-2">June 2021 - July 2021</td>
									</tr>
								</tbody>
							</table>

							<div className="not-prose">
								<a
									href="https://tsl-home-new.shamssujon.com/"
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
								src="/images/works/tsl/tsl-cover.jpg"
								alt=""
								width={1500}
								height={5000}
								className="h-auto w-full border shadow-lg"
							/>
							<h3 className="font-serif">Overview</h3>
							<p className="">
								It is an Upwork project. I have redesigned the frontend part of the whole website from
								the old one with customized Bootstrap 4. I have created some illustrations, icons by
								myself and used appropriate free images from the internet. Most of the content are from
								the existing website.
							</p>
							<h3 className="font-serif">Tech Stack</h3>
							<ul className="grid grid-cols-2">
								<li>HTML</li>
								<li>CSS/SCSS</li>
								<li>Bootstrap 4</li>
								<li>Javascript</li>
								<li>Swiper JS</li>
								<li>AOS</li>
								<li>Figma</li>
								<li>Illustrator</li>
								<li>Photoshop</li>
								<li>and more.</li>
							</ul>
							<h3 className="font-serif">Gallery</h3>
							<div className="not-prose grid grid-cols-2 gap-8">
								{/* <button type="button" onClick={() => setOpenGalleryPopup(true)}>
									Open Lightbox
								</button> */}

								{images &&
									images.map((item, index) => (
										<div
											key={index}
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
									))}
							</div>
							<Lightbox
								styles={{ container: { backgroundColor: "rgba(0, 0, 0, .95)" }, captionsTitleContainer: {backgroundColor: "transparent"} }}
								open={openGalleryPopup}
								close={() => setOpenGalleryPopup(false)}
								index={currentImageIndex}
								slides={images}
								animation={{ fade: 500, swipe: 300 }}
								plugins={[Zoom, Thumbnails, Captions]}
							/>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
}
