import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const NavItems = () => {
	const { t } = useTranslation();

	const navLinks = [
		{
			id: 1,
			name: t("nav.home"),
			href: "/",
		},
		{
			id: 2,
			name: t("nav.about"),
			href: "#o-mnie",
		},
		{
			id: 3,
			name: t("nav.projects"),
			href: "#projekty",
		},
		{
			id: 4,
			name: t("nav.contact"),
			href: "#kontakt",
		},
	];

	return (
		<ul className="nav-ul">
			{navLinks.map((item) => (
				<li key={item.id} className="nav-li">
					<a href={item.href} className="nav-li_a">
						{item.name}
					</a>
				</li>
			))}
		</ul>
	);
};

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
			<div className="max-w-7xl mx-auto">
				<div className="flex items-center justify-between py-5 mx-auto c-space">
					<a
						href="/"
						className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
					>
						Kacper Adamczyk
					</a>

					{/* Mobile view buttons */}
					<div className="sm:hidden flex items-center gap-4">
						<LanguageSwitcher />
						<button
							type="button"
							onClick={() => setIsOpen(!isOpen)}
							className="text-neutral-400 hover:text-white focus:outline-none flex items-center justify-center w-10 h-10 bg-black-300 rounded-md"
							aria-label="toggle menu"
						>
							<img
								src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
								alt="toggle menu"
								className="w-6 h-6"
							/>
						</button>
					</div>

					{/* Desktop view */}
					<nav className="sm:flex hidden items-center">
						<NavItems />
						<LanguageSwitcher />
					</nav>
				</div>
			</div>

			{/* Mobile menu */}
			<div
				className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}
				aria-expanded={isOpen}
			>
				<nav className="p-5 flex flex-col items-center">
					<NavItems />
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
