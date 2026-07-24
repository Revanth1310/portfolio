import { useState } from "react";
import { internships } from "../data/internships";
import { useImageModal } from "./ImageModalContext";

export default function Internships() {
  const [openIndex, setOpenIndex] = useState(null);
  const openImageModal = useImageModal();

  return (
    <section id="internships" className="px-6 py-20 ">
      <h1
        className="mb-8 text-center text-4xl font-bold text-accent-cyan"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Internships
      </h1>
      <div className="mx-auto flex max-w-6xl flex-col gap-4">
        {internships.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.company}
              className={`internship overflow-hidden rounded-xl border border-white/15 bg-white/5 ${isOpen ? "active" : ""}`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full cursor-pointer items-center gap-4 p-4 text-left"
                aria-expanded={isOpen}
              >
                <img
                  src={item.logo}
                  alt={`${item.company} logo`}
                  className="h-14 w-14 flex-shrink-0 rounded-full object-cover"
                />
                <span className="text-lg font-bold">{item.company}</span>
              </button>
              <div className="internship-tasks">
                <div className="flex flex-col gap-4 px-4 pb-5 md:flex-row md:justify-between">
                  <div className="text-white/90">
                    <ul className="mb-3 list-disc pl-5">
                      <li>{item.role}</li>
                      <li>{item.period}</li>
                      <li>{item.location}</li>
                    </ul>
                    {item.links.length > 0 && (
                      <div>
                        {item.linksLabel}:
                        <ul className="mt-1 list-disc pl-5">
                          {item.links.map((link) => (
                            <li key={link.href}>
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="font-bold text-accent-cyan hover:underline"
                              >
                                {link.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div>
                    Certificate:
                    <img
                      src={item.certificate}
                      alt="Certificate"
                      onClick={() => openImageModal(item.certificate)}
                      className="mt-2 h-32 w-48 cursor-pointer rounded-md object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
