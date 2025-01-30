import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const Contact = () => {
	const { t } = useTranslation();
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const formRef = useRef();

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			await emailjs.send(
				"service_r0fjowf",
				"template_me7ezet",
				{
					from_name: form.name,
					to_name: "Kacper",
					from_email: form.email,
					to_email: "kacpperr.adamczyk@gmail.com",
					message: form.message,
				},
				import.meta.env.VITE_PUBLIC_ID,
			);
			setLoading(false);
			toast.success(t("contact.toast.success"));
			setForm({
				name: "",
				email: "",
				message: "",
			});
		} catch (error) {
			setLoading(false);
			console.log(error);
			toast.error(t("contact.toast.error"));
		}
	};

	return (
		<section className="c-space my-20" id="kontakt">
			<div className="relative min-h-screen flex items-center justify-center flex-col">
				{!isMobile && (
					<img
						src="/assets/terminal.png"
						alt={t("contact.terminal.alt")}
						className="absolute min-h-[120vh]"
					/>
				)}

				<div className="contact-container">
					<h3 className="head-text">{t("contact.title")}</h3>
					<p className="text-base text-white-600 mt-3">
						{t("contact.description")}
					</p>
					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className="mt-12 flex flex-col space-y-7"
					>
						<label className="space-y-3">
							<span className="field-label">{t("contact.form.name")}</span>
							<input
								type="text"
								name="name"
								value={form.name}
								onChange={handleChange}
								required
								className="field-input"
								placeholder={t("contact.placeholders.name")}
							/>
						</label>
						<label className="space-y-3">
							<span className="field-label">{t("contact.form.email")}</span>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								required
								className="field-input"
								placeholder={t("contact.placeholders.email")}
							/>
						</label>
						<label className="space-y-3">
							<span className="field-label">{t("contact.form.message")}</span>
							<textarea
								name="message"
								value={form.message}
								onChange={handleChange}
								required
								rows={5}
								className="field-input"
								placeholder={t("contact.placeholders.message")}
							/>
						</label>
						<button type="submit" className="field-btn" disabled={loading}>
							{loading ? t("contact.form.sending") : t("contact.form.send")}
							<img
								src="/assets/arrow-up.png"
								alt={t("contact.arrow.alt")}
								className="field-btn_arrow"
							/>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
