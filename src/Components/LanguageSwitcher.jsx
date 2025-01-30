import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();

	const toggleLanguage = () => {
		const newLang = i18n.language === "pl" ? "en" : "pl";
		i18n.changeLanguage(newLang);
	};

	return (
		<button
			type="button"
			onClick={toggleLanguage}
			className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors ml-6"
		>
			<span className="text-lg">{i18n.language.toUpperCase()}</span>
			<img
				src={`/assets/${i18n.language === "pl" ? "pl" : "gb"}.svg`}
				alt="language flag"
				className="w-6 h-6"
			/>
		</button>
	);
};

export default LanguageSwitcher;
