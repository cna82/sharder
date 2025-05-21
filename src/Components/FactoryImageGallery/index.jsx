"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ImageModal({ images }) {
  const router = useRouter();
  const [selected, setSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Parse img index from URL
  const getImgFromURL = () => {
    if (typeof window === "undefined") return null;
    const params = new URLSearchParams(window.location.search);
    const img = parseInt(params.get("img"));
    return isNaN(img) ? null : img;
  };

  // Set image from URL on mount
  useEffect(() => {
    const initialImg = getImgFromURL();
    if (initialImg !== null && initialImg >= 0 && initialImg < images.length) {
      setSelected(initialImg);
      setIsModalOpen(true);
    }
  }, []);

  // Listen to back/forward changes in URL
  useEffect(() => {
    const handlePopState = () => {
      const img = getImgFromURL();
      if (img !== null && img >= 0 && img < images.length) {
        setSelected(img);
        setIsModalOpen(true);
      } else {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelected(null);
    router.replace(window.location.pathname); // remove ?img param
  };

  const goToImage = (index) => {
    if (index >= 0 && index < images.length) {
      setSelected(index);
      router.replace(`?img=${index}`);
    }
  };

  return (
    <>
      {/* Image Gallery */}
      <div className="grid grid-cols-3 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Image ${i}`}
            onClick={() => goToImage(i)}
            className="cursor-pointer rounded shadow"
          />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selected !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-xl"
          >
            ✕
          </button>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => goToImage(selected - 1)}
              disabled={selected === 0}
              className="text-white text-2xl"
            >
              ‹
            </button>
            <img
              src={images[selected]}
              className="max-w-[80vw] max-h-[80vh] rounded"
            />
            <button
              onClick={() => goToImage(selected + 1)}
              disabled={selected === images.length - 1}
              className="text-white text-2xl"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}
