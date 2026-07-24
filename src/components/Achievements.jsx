import { achievements } from "../data/achievements";
import { useImageModal } from "./ImageModalContext";

export default function Achievements() {
  const openImageModal = useImageModal();

  return (
    <section className="px-6 py-16">
      <h1
        className="mb-8 text-center text-4xl font-bold text-accent-cyan"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Achievements
      </h1>
     <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item) => (
          <img
            key={item.src}
            src={item.src}
            alt={item.alt}
            onClick={() => openImageModal(item.src)}
            className="h-[260px] w-full cursor-pointer rounded-lg object-cover transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>
    </section>
  );
}
