const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Polityka Prywatności</p>
      </div>
      <div className="flex gap-3">
        <div className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </div>
        <div className="social-icon">
          <img
            src="/assets/linkedin.svg"
            alt="linkedin"
            className="w-1/2 h-1/2"
          />
        </div>
        <div className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </div>
      </div>
      <div className="grid place-items-center w-full">
        <p className="text-white text-center">
          &copy; {new Date().getFullYear()} Kacper Adamczyk. Wszelkie prawa
          zastrzeżone.
        </p>
      </div>
    </section>
  );
};
export default Footer;