import { useState } from "react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "internships", label: "Internships" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function downloadPDF() {
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "Resume.pdf";
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 z-40 w-full bg-black/10 backdrop-blur-md shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between px-6 py-3">
        <span className="text-lg font-bold tracking-wide text-white">Portfolio</span>
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
        <ul className="hidden items-center gap-6 md:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className="cursor-pointer font-bold text-white transition-colors hover:text-accent-cyan"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={downloadPDF}
              className="cursor-pointer font-bold text-white transition-colors hover:text-accent-cyan"
            >
              Resume
            </button>
          </li>
        </ul>
      </div>
      {open && (
        <ul className="flex flex-col gap-4 bg-black/80 px-6 pb-4 md:hidden">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className="cursor-pointer font-bold text-white"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                downloadPDF();
                setOpen(false);
              }}
              className="cursor-pointer font-bold text-white"
            >
              Resume
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
