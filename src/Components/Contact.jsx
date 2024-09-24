import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const Contact = () => {
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
    // service_r0fjowf
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
        import.meta.env.VITE_PUBLIC_ID
      );
      setLoading(false);
      toast.success("Twoja Wiadomość Została Wysłana");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);

      toast.error("Coś Poszło Nie Tak");
    }
  };
  return (
    <section className="c-space my-20" id="kontakt">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        {!isMobile && (
          <img
            src="/assets/terminal.png"
            alt="terminal"
            className="absolute min-h-[120vh]"
          />
        )}

        <div className="contact-container">
          <h3 className="head-text">Kontakt</h3>
          <p className="text-base text-white-600 mt-3">
            Jestem otwarty na nowe wyzwania i chętnie porozmawiam o
            możliwościach współpracy. Jeśli szukasz osoby, która pomoże rozwijać
            Twoje projekty, zapraszam do kontaktu. Z przyjemnością odpowiem na
            Twoje pytania i omówię, jak mogę wesprzeć Twój zespół
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Imię</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Jan Kowalski"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Jan@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Twoja Wiadomość</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Cześć, chcielibyśmy zaoferować ci pracę..."
              ></textarea>
            </label>
            <button type="submit" className="field-btn" disabled={loading}>
              {loading ? "Wysyłanie..." : "Wyślij Wiadomość"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
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
