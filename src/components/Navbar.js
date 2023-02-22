import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Backdrop from "./Backdrop";

export default function Navbar() {
	const menuList = [
		{ title: "About", path: "About" },
		{ title: "Services", path: "Services" },
		{ title: "Works", path: "FeaturedWorks" },
		{ title: "Contact", path: "Contact" },
	];

	const [openMenu, setOpenMenu] = useState(false);
	const handleOpenMenu = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<>
			<nav
				className={`nav sticky top-0 z-50 w-full bg-slate-100/90 py-4 backdrop-blur-sm transition md:bg-transparent md:backdrop-blur-0`}>
				<div className="container ">
					<div className="relative flex items-center justify-between">
						{/* Logo */}
						<Link href="/" className="relative z-50 block">
							<Image
								src="/images/logo.svg"
								alt="Shamsul Islam Sujon Logo"
								className="h-10 w-10 lg:h-12 lg:w-12"
								width={50}
								height={50}
							/>
						</Link>

						{/* Menu Icon */}
						<div className="flex items-center gap-2 md:gap-4 lg:gap-10">
							<button
								onClick={handleOpenMenu}
								type="button"
								className="group relative z-50 flex h-12 w-12 flex-col items-end justify-center gap-4">
								<span
									className={`absolute block h-[3px] transform rounded-full bg-slate-900 transition-all will-change-contents first-line:origin-center group-hover:w-10 lg:group-hover:w-12 ${
										openMenu ? "top-1/2 w-10 -rotate-45 lg:w-12" : "top-1/3 w-8 rotate-0 lg:w-10"
									}`}></span>
								<span
									className={`absolute block h-[3px] origin-center transform rounded-full bg-slate-900 transition-all will-change-contents ${
										openMenu ? "top-1/2 w-10 rotate-45 lg:w-12" : "top-2/3 w-10 rotate-0 lg:w-12"
									}`}></span>
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* Backdrop */}
			<Backdrop variant="light" handler={openMenu}></Backdrop>

			{/* Menu */}
			<div
				className={`fixed inset-0 z-40 grid h-full w-full transform items-center overflow-y-auto transition ${
					openMenu ? "visible opacity-100" : "invisible opacity-0"
				}`}>
				<div className="container grid place-content-center">
					<ul className="space-y-4 text-center xl:space-y-6">
						{menuList.map((menuItem, index) => (
							<li
								key={index}
								className={`transform transition delay-${50 * (index + 1)} ${
									openMenu ? "visible translate-y-0 opacity-100" : "invisible translate-y-4 opacity-0"
								}`}>
								<Link
									href={menuItem.path}
									className="inline-block cursor-pointer p-2 font-serif text-4xl transition hover:text-emerald-400 md:text-6xl"
									onClick={handleOpenMenu}>
									{menuItem.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
