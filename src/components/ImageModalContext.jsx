import { createContext, useCallback, useContext, useEffect, useState } from "react";

const ImageModalContext = createContext(() => {});

export function useImageModal() {
  return useContext(ImageModalContext);
}

export function ImageModalProvider({ children }) {
  const [src, setSrc] = useState(null);

  const openImageModal = useCallback((imgSrc) => setSrc(imgSrc), []);
  const closeModal = useCallback(() => setSrc(null), []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeModal]);

  return (
    <ImageModalContext.Provider value={openImageModal}>
      {children}
      {src && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/85"
          onClick={closeModal}
        >
          <span
            className="absolute top-5 right-6 z-10 cursor-pointer text-3xl text-white transition hover:scale-125 hover:text-red-500"
            onClick={closeModal}
          >
            &#x2716;
          </span>
          <img
            src={src}
            alt="Full size"
            className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </ImageModalContext.Provider>
  );
}
