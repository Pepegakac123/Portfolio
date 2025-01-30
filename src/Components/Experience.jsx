import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useTranslation } from "react-i18next";

import Avatar from "../Components/Avatar.jsx";
import CanvasLoader from "../Components/CanvasLoader.jsx";
import { getWorkExperiences } from "../Constants/index.js";

const Experience = () => {
	const [animationName, setAnimationName] = useState("idle");
	const { t, i18n } = useTranslation();

	// Get work experiences based on current language
	const workExperiences = getWorkExperiences(i18n.language);

	return (
		<section className="c-space my-20">
			<div className="w-full text-white 600">
				<h3 className="head-text">{t("experience.title")}</h3>
				<div className="work-container">
					<div className="work-canvas">
						<Canvas>
							<ambientLight intensity={7} />
							<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
							<directionalLight position={[10, 10, 10]} intensity={1} />
							<OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

							<Suspense fallback={<CanvasLoader />}>
								<Avatar
									position-y={-3}
									scale={3}
									animationName={animationName}
								/>
							</Suspense>
						</Canvas>
					</div>
					<div className="work-content">
						<div className="sm:py-10 py-5 sm:px-5 px-2.5">
							{workExperiences.map((item, index) => (
								<div
									key={index}
									onClick={() => setAnimationName(item.animation.toLowerCase())}
									onPointerOver={() =>
										setAnimationName(item.animation.toLowerCase())
									}
									onPointerOut={() => setAnimationName("idle")}
									className="work-content_container group"
								>
									<div className="flex flex-col h-full justify-start items-center py-2">
										<div className="work-content_logo">
											<img
												className="w-full h-full"
												src={item.icon}
												alt={item.name}
											/>
										</div>

										<div className="work-content_bar" />
									</div>

									<div className="sm:p-5 px-2.5 py-5">
										<p className="font-bold text-white-800">{item.name}</p>
										<p className="text-sm mb-5">
											{item.pos} -- <span>{item.duration}</span>
										</p>
										{item.title.map(({ heading, content }, idx) => (
											<p
												key={`${heading}-${idx}`}
												className="group-hover:text-white transition-all ease-in-out duration-500 text-white-800 text-sm my-4"
											>
												<span className="font-bold text-white-800">
													{heading}
												</span>
												{content}
											</p>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
