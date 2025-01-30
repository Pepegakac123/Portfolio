import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "./HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../Constants/index.js";
import Target from "./Target.jsx";
import ReactLogo from "./ReactLogo.jsx";
import Cube from "./Cube.jsx";
import Rings from "./Rings.jsx";
import HeroCamera from "./HeroCamera.jsx";
import Button from "./Button.jsx";
import { useTranslation } from "react-i18next";

const Hero = () => {
	const { t } = useTranslation();
	const isSmall = useMediaQuery({ maxWidth: 440 });
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

	const sizes = calculateSizes(isSmall, isMobile, isTablet);

	return (
		<section className="min-h-screen w-full flex flex-col relative">
			<div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
				<p className="capitalize sm:text-2xl text-lg font-medium text-white text-center font-generalsans">
					{t("hero.greeting")} <span className="waving-hand">👋</span>
				</p>
				<p className="text-2xl md:text-4xl xl:text-5xl font-bold text-center text-gray_gradient">
					{t("hero.role")}
				</p>
			</div>
			<div className="w-full h-full absolute inset-0">
				<Canvas className="w-full h-full">
					<Suspense fallback={<CanvasLoader />}>
						<PerspectiveCamera makeDefault position={[0, 0, 20]} />
						<HeroCamera isMobile={isMobile}>
							<HackerRoom
								position={sizes.deskPosition}
								scale={sizes.deskScale}
								rotation={[0, -Math.PI, 0]}
							/>
						</HeroCamera>

						<group>
							<Target position={sizes.targetPosition} />
							<ReactLogo position={sizes.reactLogoPosition} />
							<Cube position={sizes.cubePosition} />
							<Rings position={sizes.ringPosition} />
						</group>
						<ambientLight intensity={1} />
						<directionalLight position={[10, 10, 10]} intensity={0.5} />
					</Suspense>
				</Canvas>
			</div>
			<div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
				<a href="#o-mnie" className="w-fit">
					<Button
						name={t("hero.learnMore")}
						isBeam
						containerClass="sm:w-fit w-full sm:min-w-96 hover:shadow-md hover:shadow-emerald-700 hover:scale-105 transition-all duration-300"
					/>
				</a>
			</div>
		</section>
	);
};

export default Hero;
