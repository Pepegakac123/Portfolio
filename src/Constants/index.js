export const navLinks = [
	{
		id: 1,
		name: "Strona Główna",
		href: "/",
	},
	{
		id: 2,
		name: "O Mnie",
		href: "#o-mnie",
	},
	{
		id: 3,
		name: "Projekty",
		href: "#projekty",
	},
	{
		id: 4,
		name: "Kontakt",
		href: "#kontakt",
	},
];

export const myProjects = [
	{
		title: "Jobster - Aplikacja do śledzenia procesu aplikacji o pracę",
		desc: "Jobster to fullstackowa aplikacja zbudowana w oparciu o TypeScript, wykorzystująca React z Vite po stronie frontendu oraz Express.js i Prisma ORM po stronie backendu. Aplikacja umożliwia użytkownikom śledzenie procesu aplikacji o pracę, zarządzanie statusami rekrutacji oraz przechowywanie istotnych informacji o potencjalnych pracodawcach. Zawiera system autentykacji, filtrowania ofert oraz generowania statystyk aplikacji.",
		subdesc: "",
		href: "https://jobster.kacperadamczyk.pl/",
		texture: "/textures/project/jobster.mp4",
		logo: "/assets/jobster.ico",
		logoStyle: {
			backgroundColor: "#10B981", // Jasny zielony - nawiązanie do koloru logo
			border: "0.2px solid #059669", // Ciemniejszy odcień zielonego dla bordera
			boxShadow: "0px 0px 60px 0px #34D39940", // Delikatny zielony cień
		},
		spotlight: "/assets/spotlight2.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "TypeScript",
				path: "/assets/typescript.png",
			},
			{
				id: 3,
				name: "Node.js",
				path: "/assets/nodejs.png",
			},
			{
				id: 4,
				name: "Express",
				path: "/assets/express.png",
			},
			{
				id: 5,
				name: "Prisma",
				path: "/assets/prisma.png",
			},
			{
				id: 6,
				name: "MySQL",
				path: "/assets/mysql.png",
			},
			{
				id: 7,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 8,
				name: "Shadcn",
				path: "assets/shadcn.svg",
			},
		],
	},
	{
		title:
			"Pingram - Aplikacja Social Media inspirowana Instagramem i Pinterestem",
		desc: "Pingram to aplikacja stworzona przy pomocy Reacta i jego ekosystemu a także backendu appwrite. Umożliwia ona użytkowniką tworzenie własnych kont, dodawanie zdjęć oraz zarządzanie nimi. Jest ona połączeniem dwóch słynnych aplikacji - Instagrama i Pinteresta ",
		subdesc: "",
		href: "https://pingram.kacperadamczyk.pl/",
		texture: "/textures/project/pingram.mp4",
		logo: "/assets/pingram.svg",
		logoStyle: {
			backgroundColor: "#1C1A43",
			border: "0.2px solid #252262",
			boxShadow: "0px 0px 60px 0px #635BFF4D",
		},
		spotlight: "/assets/spotlight5.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 7,
				name: "Typescript",
				path: "/assets/typescript.png",
			},
			{
				id: 5,
				name: "React Router",
				path: "/assets/react-router.png",
			},
			{
				id: 6,
				name: "React Query",
				path: "/assets/react-query.png",
			},
			{
				id: 2,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 3,
				name: "Shadcn",
				path: "assets/shadcn.svg",
			},
			{
				id: 4,
				name: "Appwrite",
				path: "/assets/appwrite.png",
			},
		],
	},
	{
		title: "ComfyStore - Sklep Z Dekoracjami",
		desc: "ComfyStore to przykładowa frontendowa strona sklepu z dekoracjami, zbudowana przy użyciu ekosystemu React. Strona oferuje funkcje logowania i rejestracji użytkowników, którzy mogą dodawać wybrane produkty do koszyka oraz dokonywać zakupów. Zintegrowane dynamiczne filtry umożliwiają łatwe przeglądanie i wybór produktów. Dodatkowo, strona pozwala użytkownikom na wybór motywu (ciemnego lub jasnego), co zwiększa wygodę korzystania i dostosowuje wygląd strony do preferencji użytkownika.",
		subdesc: "",
		href: "https://comfystore.kacperadamczyk.pl/",
		texture: "/textures/project/comfystore.mp4",
		logo: "/assets/comfystore.png",
		logoStyle: {
			backgroundColor: "#1C1A43",
			border: "0.2px solid #252262",
			boxShadow: "0px 0px 60px 0px #635BFF4D",
		},
		spotlight: "/assets/spotlight5.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 3,
				name: "Daisy UI",
				path: "assets/daisyui.png",
			},
			{
				id: 4,
				name: "Redux",
				path: "/assets/redux.png",
			},
		],
	},
	{
		title: "Symulator rozkazów procesora INTEL 8086",
		desc: "Aplikacja symulująca działanie podstawowych rozkazów procesora Intel 8086. Umożliwia wykonywanie operacji na rejestrach (MOV, XCHG), operacji na pamięci z różnymi trybami adresowania (indeksowy, bazowy, indeksowo-bazowy) oraz operacji stosowych (PUSH, POP). Projekt został zbudowany z wykorzystaniem nowoczesnego stosu technologicznego React, z zarządzaniem stanem przez Redux Toolkit oraz interfejsem użytkownika opartym na komponentach Shadcn/UI.",
		subdesc: "",
		href: "https://symulator-intel8086.kacperadamczyk.pl/", // Zakładam przykładowy URL
		texture: "/textures/project/procesor8086.mp4", // Zakładam ścieżkę do wideo
		logo: "/assets/cpu-favicon.svg", // Zakładam ścieżkę do logo
		logoStyle: {
			backgroundColor: "#1C1A43",
			border: "0.2px solid #252262",
			boxShadow: "0px 0px 60px 0px #635BFF4D",
		},
		spotlight: "/assets/spotlight5.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "Redux Toolkit",
				path: "/assets/redux.png",
			},
			{
				id: 3,
				name: "TypeScript",
				path: "/assets/typescript.png",
			},
			{
				id: 4,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 5,
				name: "Shadcn",
				path: "assets/shadcn.svg",
			},
		],
	},
	{
		title: "Webkaster - Portfolio Agencji Interaktywnej",
		desc: "Webkaster to strona portfolio agencji zajmującej się tworzeniem stron internetowych oraz marketingiem. Zbudowana na WordPressie z wykorzystaniem Elementora, umożliwia łatwą edycję i zarządzanie treścią. Strona obsługuje wiele języków (multilanguage) oraz dynamiczny kontekst, co pozwala na automatyczne dostosowanie treści do każdej realizacji. Dzięki temu portfolio jest bardziej interaktywne i intuicyjne dla użytkowników, zapewniając przejrzystą prezentację projektów agencji. ",
		subdesc: "",
		href: "https://www.webkaster.com/",
		texture: "/textures/project/webkaster.mp4",
		logo: "/assets/webkaster.png",
		logoStyle: {
			backgroundColor: "#2A1816",
			border: "0.2px solid #fde393",
			boxShadow: "0px 0px 60px 0px #AA3C304D",
		},
		spotlight: "/assets/spotlight1.png",
		tags: [
			{
				id: 1,
				name: "Wordpress",
				path: "/assets/Wordpress.png",
			},
			{
				id: 2,
				name: "Elementor",
				path: "/assets/Elementor.png",
			},
			{
				id: 3,
				name: "Figma",
				path: "/assets/figma.png",
			},
		],
	},
	{
		title: "GorkaBooks - Kiermasz Ksiazek Dla Szkoly",
		desc: "Celem projektu było stworzenie strony internetowej dla szkoły, która miała ułatwić uczniom kupowanie i sprzedawanie używanych podręczników. Strona została zbudowana z użyciem JavaScriptu i PHP. Oferowała funkcje takie jak komunikacja między użytkownikami poprzez czat oraz dodawanie i wyszukiwanie książek. Mimo szerokiej funkcjonalności, projekt ostatecznie nie został wdrożony.",
		subdesc: "",
		href: "https://gorka-ksiazki.kacperadamczyk.pl/strona-glowna",
		texture: "/textures/project/gorka.mp4",
		logo: "/assets/gorka.png",
		logoStyle: {
			backgroundColor: "#0E1F38",
			border: "0.2px solid #0E2D58",
			boxShadow: "0px 0px 60px 0px #2F67B64D",
		},
		spotlight: "/assets/spotlight4.png",
		tags: [
			{
				id: 1,
				name: "JavaScript",
				path: "/assets/JS.png",
			},
			{
				id: 2,
				name: "Figma",
				path: "assets/figma.png",
			},
			{
				id: 3,
				name: "PHP",
				path: "/assets/php.png",
			},
			{
				id: 4,
				name: "MySQL",
				path: "/assets/mysql.png",
			},
		],
	},
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
	return {
		deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
		deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
		universityScale: isSmall ? 0.1 : 0.12,
		universityPosition: isMobile ? [0, -0.85, 1.3] : [0, -0.85, 1],
		cubePosition: isSmall
			? [4, -5, 0]
			: isMobile
				? [5, -5, 0]
				: isTablet
					? [5, -5, 0]
					: [9, -5.5, 0],
		reactLogoPosition: isSmall
			? [3, 4, 0]
			: isMobile
				? [5, 4, 0]
				: isTablet
					? [5, 4, 0]
					: [12, 3, 0],
		ringPosition: isSmall
			? [-5, 7, 0]
			: isMobile
				? [-10, 10, 0]
				: isTablet
					? [-12, 10, 0]
					: [-24, 10, 0],
		targetPosition: isSmall
			? [-5, -10, -10]
			: isMobile
				? [-9, -10, -10]
				: isTablet
					? [-11, -7, -10]
					: [-13, -13, -10],
	};
};

export const workExperiences = [
	{
		id: 1,
		name: "Webkaster",
		pos: "Freelancer - Web Development",
		duration: "2023 - Present",
		title: [
			{
				heading: "Projektowanie i wdrażanie stron w WordPress - ",
				content:
					"Zajmowałem się kompleksowym projektowaniem oraz wdrażaniem stron internetowych opartych na WordPressie, dbając o ich funkcjonalność i estetykę.",
			},
			{
				heading: "Tworzenie stron z użyciem Reacta - ",
				content:
					"Tworzyłem dynamiczne i nowoczesne strony internetowe z wykorzystaniem Reacta oraz bibliotek takich jak React Router, React Query i Redux, zapewniając efektywną nawigację, zarządzanie danymi oraz stanem aplikacji.",
			},
			{
				heading: "Projektowanie grafik - ",
				content:
					"Odpowiadałem za projektowanie materiałów graficznych, które wspierały komunikację wizualną na stronach internetowych oraz w kampaniach marketingowych.",
			},
			{
				heading: "Optymalizacja SEO oraz kampanie reklamowe - ",
				content:
					"Prowadziłem optymalizację stron pod kątem SEO oraz tworzyłem kampanie reklamowe przy użyciu Google Ads i Facebook Ads, zwiększając widoczność oraz zasięgi klientów.",
			},
		],
		icon: "/assets/webkaster.svg",
		animation: "victory",
	},
	{
		id: 2,
		name: "Technikum Informatyczne w Rabce Zdrój",
		pos: "Praktykant",
		duration: "2022 - 2023",
		title: [
			{
				heading: "Projektowanie wizualne - ",
				content:
					"Stworzyłem projekt wizualny dla szkolnej strony internetowej, która miała na celu promocję i organizację szkolnych targów książki.",
			},
			{
				heading: "Implementacja projektu - ",
				content:
					"Zaimplementowałem stworzony projekt przy użyciu języków CSS i HTML, dbając o estetykę i funkcjonalność strony.",
			},
			{
				heading: "Dodawanie funkcjonalności JavaScript - ",
				content:
					"Dodałem funkcjonalności oparte na JavaScript, umożliwiające filtrowanie książek, dodawanie ich do koszyka oraz dynamiczne wyświetlanie treści na stronie.",
			},
		],
		icon: "/assets/technikum.svg",
		animation: "clapping",
	},
	{
		id: 3,
		name: "Printsoft",
		pos: "Praktykant",
		duration: "2021 - 2022",
		title: [
			{
				heading: "Projektowanie i tworzenie grafik - ",
				content:
					"Tworzyłem i projektowałem różnorodne materiały graficzne, w tym mockupy, banery oraz ulotki, dostosowane do potrzeb klientów i kampanii marketingowych.",
			},
			{
				heading: "Administracja i tworzenie treści na stronie internetowej - ",
				content:
					"Zajmowałem się zarządzaniem oraz tworzeniem treści na stronach internetowych za pomocą systemu CMS WordPress, dbając o ich aktualność i atrakcyjność wizualną.",
			},
		],
		icon: "/assets/printsoft.svg",
		animation: "salute",
	},
];
