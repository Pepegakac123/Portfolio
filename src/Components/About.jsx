import Button from "./Button";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import University from "./University";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../Constants/index.js";
import { useTranslation } from "react-i18next";

const About = () => {
	const [hasCopied, setHasCopied] = useState(false);
	const { t } = useTranslation();

	const handleCopy = () => {
		navigator.clipboard.writeText("kontakt@kacperadamczyk.pl");
		setHasCopied(true);
		setTimeout(() => {
			setHasCopied(false);
		}, 2000);
	};

	const isSmall = useMediaQuery({ maxWidth: 440 });
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

	const sizes = calculateSizes(isSmall, isMobile, isTablet);

	return (
		<section className="c-space my-20" id="o-mnie">
			<div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
				<div className="col-span-1 xl:row-span-3">
					<div className="grid-container hover:shadow-lg hover:shadow-emerald-700/60 transition-shadow duration-300">
						<img src="/assets/grid1.png" alt="grid-1" className="grid-img" />
						<div>
							<p className="grid-headtext">{t("about.title")}</p>
							<p className="grid-subtext">
								{t("about.intro.age")} {t("about.intro.development")}
								{t("about.interests.hobbies")} {t("about.interests.culture")}
							</p>
						</div>
					</div>
				</div>

				<div className="col-span-1 xl:row-span-3">
					<div className="grid-container hover:shadow-lg hover:shadow-emerald-700/60 transition-shadow duration-300">
						<img src="/assets/grid2.png" alt="grid-2" className="grid-img" />
						<p className="grid-headtext">{t("about.techStack.title")}</p>
						<p className="grid-subtext">{t("about.techStack.description")}</p>
					</div>
				</div>

				<div className="col-span-1 xl:row-span-4">
					<div className="grid-container hover:shadow-lg hover:shadow-emerald-700/60 transition-shadow duration-300">
						<div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
							<Canvas>
								<Suspense fallback={<CanvasLoader />}>
									<University
										position={sizes.universityPosition}
										scale={sizes.universityScale}
										rotation={[Math.PI, Math.PI / 2, 0]}
									/>
									<ambientLight intensity={1} />
									<directionalLight position={[10, 10, 10]} intensity={0.5} />
								</Suspense>
							</Canvas>
						</div>
						<div>
							<p className="grid-headtext">{t("about.education.title")}</p>
							<p className="grid-subtext">{t("about.education.description")}</p>
							<button
								type="button"
								className="btn w-full mt-10"
								onClick={() => {
									const section = document.getElementById("kontakt");
									if (section) {
										section.scrollIntoView({ behavior: "smooth" });
									}
								}}
							>
								<span className="relative flex h-3 w-3">
									<span className="btn-ping" />
									<span className="btn-ping_dot" />
								</span>
								{t("about.writeNow")}
							</button>
						</div>
					</div>
				</div>

				<div className="xl:col-span-2 xl:row-span-3">
					<div className="grid-container hover:shadow-lg hover:shadow-emerald-700/60 transition-shadow duration-300">
						<img
							src="/assets/grid3.png"
							alt="grid-3"
							className="grid-img sm:h-[266px]"
						/>
						<div>
							<p className="grid-headtext">{t("about.passion.title")}</p>
							<p className="grid-subtext">
								{t("about.passion.description")}
								<br />
								<br />
								{t("about.passion.future")}
							</p>
						</div>
					</div>
				</div>

				<div className="xl:col-span-1 xl:row-span-2">
					<div className="grid-container hover:shadow-lg hover:shadow-emerald-700/60 transition-shadow duration-300">
						<img
							src="assets/grid4.png"
							alt="grid-4"
							className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
						/>
						<div className="space-y-2">
							<p className="grid-subtext text-center">
								{t("about.contact.title")}
							</p>
							{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
							<div className="copy-container" onClick={handleCopy}>
								<img
									src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
									alt="copy"
								/>
								<p className="lg:text-xl md:text-sm font-medium text-gray_gradient text-white">
									kontakt@kacperadamczyk.pl
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
