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
                Mam 20 lat i moją pasję do tworzenia stron internetowych
                odkryłem, gdy skończyłem 7. klasę. Od tego czasu nieustannie
                rozwijam swoje umiejętności w tej dziedzinie. Poza
                programowaniem, jestem ogromnym fanem uniwersum Wiedźmina,
                Kibicuję FC Barcelonie, śledząc każdy mecz z zapartym tchem.
                Interesuję się również kulturą japońską oraz sztuką tatuażu,
                która dla mnie jest nie tylko formą ekspresji, ale także piękną
                opowieścią na skórze.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container hover:shadow-lg hover:shadow-emerald-700/60  transition-shadow duration-300">
            <img src="/assets/grid2.png" alt="grid-2" className="grid-img " />
            <p className="grid-headtext">Tech Stack</p>
            <p className="grid-subtext">
              Specjalizuję się w Web Development, wykorzystując{" "}
              <b>JavaScript/TypeScript</b> oraz <b>React</b> do budowy
              dynamicznych aplikacji, <b>Tailwind CSS</b> do tworzenia
              responsywnych i nowoczesnych interfejsów oraz <b>WordPress</b> z{" "}
              <b>Elementorem</b> do projektowania elastycznych stron
              internetowych. Skupiam się na wydajności, dostępności i
              nowoczesnych rozwiązaniach frontendowych.
            </p>
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
                Wyższej Szkole Ekonomii i Informatyki w Krakowie, Wcześniej
                ukończyłem Technikum Informatyczne w Rabce-Zdroju. Studia te
                pozwalają mi rozwijać się w kierunku, który jest moją prawdziwą
                pasją. Dzięki niestacjonarnej formie nauki mam możliwość
                łączenia studiów z pracą, co pozwala mi zdobywać doświadczenie
                zawodowe, jednocześnie kontynuując edukację.
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
                Moja przygoda z frontendem zaczęła się wiele lat temu, kiedy
                stworzyłem swoją pierwszą banalna stronę HTML(nie posiadała
                nawet CSS-a). Od razu zafascynowała mnie możliwość
                przekształcania pomysłów w rzeczywistość, gdzie każdy element,
                od przycisku po animację, ma znaczenie dla doświadczenia
                użytkownika.
                <br />
                <br />
                Ciągle eksploruję nowe technologie i narzędzia, takie jak React
                czy Tailwind CSS, aby tworzyć nowoczesne i intuicyjne
                interfejsy. Moją motywacją jest nieustanny rozwój oraz chęć
                dostarczania użytkownikom wyjątkowych doświadczeń. Ostatnio
                zainteresowałem się również backendem co daje możliwość
                tworzenia całych aplikacji. W niedalekiej przyszłości napewno
                planuje poznać tajniki NodeJS oraz Next.js
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
