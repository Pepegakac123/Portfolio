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

export const getMyProjects = (language) => {
	const projects = {
		pl: [
			{
				title: "Jobster - Aplikacja do śledzenia procesu aplikacji o pracę",
				desc: "Jobster to fullstackowa aplikacja zbudowana w oparciu o TypeScript, wykorzystująca React z Vite po stronie frontendu oraz Express.js i Prisma ORM po stronie backendu. Aplikacja umożliwia użytkownikom śledzenie procesu aplikacji o pracę, zarządzanie statusami rekrutacji oraz przechowywanie istotnych informacji o potencjalnych pracodawcach. Zawiera system autentykacji, filtrowania ofert oraz generowania statystyk aplikacji.",
				href: "https://jobster.kacperadamczyk.pl/",
				texture: "/textures/project/jobster.mp4",
				logo: "/assets/jobster.ico",
				logoStyle: {
					backgroundColor: "#10B981",
					border: "0.2px solid #059669",
					boxShadow: "0px 0px 60px 0px #34D39940",
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
				desc: "Pingram to aplikacja stworzona przy pomocy Reacta i jego ekosystemu a także backendu appwrite. Umożliwia ona użytkowniką tworzenie własnych kont, dodawanie zdjęć oraz zarządzanie nimi. Jest ona połączeniem dwóch słynnych aplikacji - Instagrama i Pinteresta.",
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
						id: 2,
						name: "Typescript",
						path: "/assets/typescript.png",
					},
					{
						id: 3,
						name: "React Router",
						path: "/assets/react-router.png",
					},
					{
						id: 4,
						name: "React Query",
						path: "/assets/react-query.png",
					},
					{
						id: 5,
						name: "TailwindCSS",
						path: "assets/tailwindcss.png",
					},
					{
						id: 6,
						name: "Shadcn",
						path: "assets/shadcn.svg",
					},
					{
						id: 7,
						name: "Appwrite",
						path: "/assets/appwrite.png",
					},
				],
			},
			{
				title: "ComfyStore - Sklep Z Dekoracjami",
				desc: "ComfyStore to przykładowa frontendowa strona sklepu z dekoracjami, zbudowana przy użyciu ekosystemu React. Strona oferuje funkcje logowania i rejestracji użytkowników, którzy mogą dodawać wybrane produkty do koszyka oraz dokonywać zakupów. Zintegrowane dynamiczne filtry umożliwiają łatwe przeglądanie i wybór produktów. Dodatkowo, strona pozwala użytkownikom na wybór motywu (ciemnego lub jasnego), co zwiększa wygodę korzystania i dostosowuje wygląd strony do preferencji użytkownika.",
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
				href: "https://symulator-intel8086.kacperadamczyk.pl/",
				texture: "/textures/project/procesor8086.mp4",
				logo: "/assets/cpu-favicon.svg",
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
				desc: "Webkaster to strona portfolio agencji zajmującej się tworzeniem stron internetowych oraz marketingiem. Zbudowana na WordPressie z wykorzystaniem Elementora, umożliwia łatwą edycję i zarządzanie treścią. Strona obsługuje wiele języków (multilanguage) oraz dynamiczny kontekst, co pozwala na automatyczne dostosowanie treści do każdej realizacji. Dzięki temu portfolio jest bardziej interaktywne i intuicyjne dla użytkowników, zapewniając przejrzystą prezentację projektów agencji.",
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
		],
		en: [
			{
				title: "Jobster - Job Application Tracking App",
				desc: "Jobster is a full-stack application built with TypeScript, using React with Vite on the frontend and Express.js with Prisma ORM on the backend. The application allows users to track their job application process, manage recruitment statuses, and store important information about potential employers. It includes an authentication system, offer filtering, and application statistics generation.",
				href: "https://jobster.kacperadamczyk.pl/",
				texture: "/textures/project/jobster.mp4",
				logo: "/assets/jobster.ico",
				logoStyle: {
					backgroundColor: "#10B981",
					border: "0.2px solid #059669",
					boxShadow: "0px 0px 60px 0px #34D39940",
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
				title: "Pingram - Social Media App Inspired by Instagram and Pinterest",
				desc: "Pingram is an application created using React and its ecosystem along with the Appwrite backend. It enables users to create their own accounts, add photos, and manage them. It's a combination of two famous applications - Instagram and Pinterest.",
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
						id: 2,
						name: "Typescript",
						path: "/assets/typescript.png",
					},
					{
						id: 3,
						name: "React Router",
						path: "/assets/react-router.png",
					},
					{
						id: 4,
						name: "React Query",
						path: "/assets/react-query.png",
					},
					{
						id: 5,
						name: "TailwindCSS",
						path: "assets/tailwindcss.png",
					},
					{
						id: 6,
						name: "Shadcn",
						path: "assets/shadcn.svg",
					},
					{
						id: 7,
						name: "Appwrite",
						path: "/assets/appwrite.png",
					},
				],
			},
			{
				title: "ComfyStore - Home Decor Shop",
				desc: "ComfyStore is a sample frontend home decor store website built using the React ecosystem. The site offers user login and registration features, allowing users to add selected products to their cart and make purchases. Integrated dynamic filters enable easy browsing and product selection. Additionally, the site allows users to choose a theme (dark or light), enhancing usability and adapting the site's appearance to user preferences.",
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
				title: "INTEL 8086 Processor Instruction Simulator",
				desc: "An application simulating the basic instructions of the Intel 8086 processor. It enables operations on registers (MOV, XCHG), memory operations with different addressing modes (index, base, index-base), and stack operations (PUSH, POP). The project was built using modern React technology stack, with state management through Redux Toolkit and a user interface based on Shadcn/UI components.",
				href: "https://symulator-intel8086.kacperadamczyk.pl/",
				texture: "/textures/project/procesor8086.mp4",
				logo: "/assets/cpu-favicon.svg",
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
				title: "Webkaster - Interactive Agency Portfolio",
				desc: "Webkaster is a portfolio website for an agency specializing in website development and marketing. Built on WordPress using Elementor, it allows for easy content editing and management. The site supports multiple languages (multilanguage) and dynamic context, enabling automatic content adaptation for each implementation. This makes the portfolio more interactive and intuitive for users, providing a clear presentation of the agency's projects.",
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
				title: "GorkaBooks - School Book Fair",
				desc: "The project aimed to create a website for the school that would facilitate students buying and selling used textbooks. The site was built using JavaScript and PHP. It offered features such as user-to-user communication through chat and book adding and searching capabilities. Despite its extensive functionality, the project was ultimately not implemented.",
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
		],
	};

	return projects[language] || projects["en"]; // Fallback to English if language not found
};

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

export const getWorkExperiences = (language) => {
	const experiences = {
		pl: [
			{
				id: 1,
				name: "Webkaster",
				pos: "Fullstack Developer",
				duration: "2023 - Obecnie",
				title: [
					{
						heading: "Rozwój aplikacji fullstackowych - ",
						content:
							"Projektuję i implementuję kompletne rozwiązania webowe, począwszy od interfejsu użytkownika po backend i bazę danych. Tworzę podstawowe funkcjonalności CRUD oraz API RESTowe z wykorzystaniem Node.js i Express.js.",
					},
					{
						heading: "Frontend Development z React - ",
						content:
							"Buduję nowoczesne aplikacje internetowe wykorzystując React i jego ekosystem (React Router, Redux, React Query). Koncentruję się na tworzeniu responsywnych interfejsów z naciskiem na optymalizację wydajności i dostępność.",
					},
					{
						heading: "WordPress Development - ",
						content:
							"Tworzę i dostosowuję motywy oraz wtyczki WordPress, implementując niestandardowe funkcjonalności przy użyciu PHP. Rozwijam również headless CMS z wykorzystaniem WordPress REST API.",
					},
					{
						heading: "Rozwijanie istniejących systemów - ",
						content:
							"Analizuję, modyfikuję i rozbudowuję funkcjonalności w działających aplikacjach. Implementuję nowe features, optymalizuję wydajność oraz integruję systemy zewnętrzne poprzez API.",
					},
					{
						heading: "Zarządzanie treścią i SEO - ",
						content:
							"Tworzę i zarządzam contentem na różnych platformach, dbając o optymalizację SEO. Implementuję zaawansowane strategie marketingowe wykorzystując Google Ads i Facebook Ads.",
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
						heading:
							"Administracja i tworzenie treści na stronie internetowej - ",
						content:
							"Zajmowałem się zarządzaniem oraz tworzeniem treści na stronach internetowych za pomocą systemu CMS WordPress, dbając o ich aktualność i atrakcyjność wizualną.",
					},
				],
				icon: "/assets/printsoft.svg",
				animation: "salute",
			},
		],
		en: [
			{
				id: 1,
				name: "Webkaster",
				pos: "Fullstack Developer",
				duration: "2023 - Present",
				title: [
					{
						heading: "Fullstack Application Development - ",
						content:
							"I design and implement complete web solutions, from user interface to backend and database. I create basic CRUD functionalities and REST APIs using Node.js and Express.js.",
					},
					{
						heading: "Frontend Development with React - ",
						content:
							"I build modern web applications using React and its ecosystem (React Router, Redux, React Query). I focus on creating responsive interfaces with emphasis on performance optimization and accessibility.",
					},
					{
						heading: "WordPress Development - ",
						content:
							"I create and customize WordPress themes and plugins, implementing custom functionalities using PHP. I also develop headless CMS solutions using WordPress REST API.",
					},
					{
						heading: "Existing Systems Development - ",
						content:
							"I analyze, modify, and expand functionalities in operating applications. I implement new features, optimize performance, and integrate external systems through APIs.",
					},
					{
						heading: "Content Management and SEO - ",
						content:
							"I create and manage content across various platforms, ensuring SEO optimization. I implement advanced marketing strategies using Google Ads and Facebook Ads.",
					},
				],
				icon: "/assets/webkaster.svg",
				animation: "victory",
			},
			{
				id: 2,
				name: "IT Technical School in Rabka Zdrój",
				pos: "Intern",
				duration: "2022 - 2023",
				title: [
					{
						heading: "Visual Design - ",
						content:
							"I created a visual design for the school's website, which aimed to promote and organize school book fairs.",
					},
					{
						heading: "Project Implementation - ",
						content:
							"I implemented the created design using CSS and HTML, ensuring the website's aesthetics and functionality.",
					},
					{
						heading: "JavaScript Functionality Implementation - ",
						content:
							"I added JavaScript-based functionalities enabling book filtering, shopping cart features, and dynamic content display on the website.",
					},
				],
				icon: "/assets/technikum.svg",
				animation: "clapping",
			},
			{
				id: 3,
				name: "Printsoft",
				pos: "Intern",
				duration: "2021 - 2022",
				title: [
					{
						heading: "Graphics Design and Creation - ",
						content:
							"I created and designed various graphic materials, including mockups, banners, and flyers, tailored to client needs and marketing campaigns.",
					},
					{
						heading: "Website Administration and Content Creation - ",
						content:
							"I managed and created content for websites using the WordPress CMS, ensuring their currency and visual appeal.",
					},
				],
				icon: "/assets/printsoft.svg",
				animation: "salute",
			},
		],
	};

	return experiences[language] || experiences["en"]; // Fallback to English if language not found
};
