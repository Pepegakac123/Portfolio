import Button from "./Button";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Ring } from "@react-three/drei";
import University from "./University";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../Constants/index.js";
const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("kacpperr.adamczyk@gmail.com");
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
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full ">
        <div className="col-span-1 xl:row-span-3 ">
          <div className="grid-container hover:shadow-lg hover:shadow-emerald-700/60 transition-shadow duration-300">
            <img src="/assets/grid1.png" alt="grid-1" className="grid-img" />
            <div>
              <p className="grid-headtext">Cześć, Jestem Kacper</p>
              <p className="grid-subtext">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                eligendi dolorem maiores distinctio obcaecati praesentium quos,
                voluptates debitis quia commodi reiciendis dolore quam ad
                pariatur possimus sapiente fugit cumque provident.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container hover:shadow-lg hover:shadow-emerald-700/60  transition-shadow duration-300">
            <img src="/assets/grid2.png" alt="grid-2" className="grid-img " />
            <div className="grid-headtext">Tech Stack</div>
            <div className="grid-subtext">
              Specjalizuje się w Web Development przy użyciu technologi takich
              jak JavaScript/TypeScript z wykorzystaniem ekosystemu React oraz
              CMS-a Wordpress z użyciem Elementora jako page buildera
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container hover:shadow-lg hover:shadow-emerald-700/60  transition-shadow duration-300">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Canvas>
                <Suspense fallback={<CanvasLoader />}>
                  <University
                    // scale={controls.scale}
                    position={sizes.universityPosition}
                    scale={sizes.universityScale}
                    // position={[controls.px, controls.py, controls.pz]}
                    rotation={[Math.PI, Math.PI / 2, 0]}
                  />
                  <ambientLight intensity={1} />
                  <directionalLight position={[10, 10, 10]} intensity={0.5} />
                </Suspense>
              </Canvas>
            </div>
            <div>
              <p className="grid-headtext">
                Jestem Studentem Informatyki Stosowanej
              </p>
              <p className="grid-subtext">
                Od 1 października 2024 roku studiuję informatykę stosowaną w
                Wyższej Szkole Ekonomii i Informatyki w Krakowie. Wcześniej
                ukończyłem Technikum Informatyczne w Rabce Zdrój.
                <br />
                <br />
                Podjęte studia pomagają mi w dalszym stopniu rozwijać się w
                kierunki, który prawdziwe mnie pasjonuje. Dzięki niestacjonarnym
                formą studiów mogę pozwolić sobie na swobodną łączenie pracy z
                nauka.
              </p>
              <Button
                name="Napisz Teraz"
                isBeam
                containerClass={"w-full mt-10"}
              />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container hover:shadow-lg hover:shadow-emerald-700/60  transition-shadow duration-300">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="grid-img sm:h-[266px]"
            />
            <div>
              <p className="grid-headtext">Moja pasja do frontendu</p>
              <p className="grid-subtext">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                nulla doloremque possimus reprehenderit ipsa sequi dignissimos,
                ex sapiente perferendis labore corrupti sunt pariatur facilis?
                Molestiae quam error assumenda aspernatur laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container hover:shadow-lg hover:shadow-emerald-700/60  transition-shadow duration-300">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Skontaktuj się</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-xl md:text-sm font-medium text-gray_gradient text-white">
                  kacpperr.adamczyk@gmail.com
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
