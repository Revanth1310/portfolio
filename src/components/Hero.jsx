function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center px-6 pt-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="section-content order-2 text-left md:order-1">
          <p className="text-3xl md:text-4xl">
            Hello, I'm
            <br />
            <strong className="text-4xl md:text-5xl">Chandika Purna Revanth</strong>
          </p>
          <p className="mt-4 text-xl text-white/80 md:text-2xl">
            AI/ML Enthusiast | Python Developer
            <br />
            SIH2024 Finalist
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              className="inline-block cursor-pointer rounded-md bg-accent-cyan px-5 py-2.5 font-bold text-black transition hover:brightness-110"
            >
              View My Work
            </a>
            <a
              href="#internships"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("internships");
              }}
              className="inline-block cursor-pointer rounded-md border-2 border-white px-5 py-2.5 font-bold text-white transition hover:bg-white hover:text-black"
            >
              Internships
            </a>
          </div>
        </div>
        <div className="section-content order-1 flex justify-center md:order-2">
          <img
            src="/images/revanth.jpg"
            alt="Revanth"
            className="h-72 w-72 rounded-full border-2 border-transparent object-cover shadow-lg transition-transform duration-300 hover:scale-105 md:h-[450px] md:w-[450px]"
          />
        </div>
      </div>
    </section>
  );
}
