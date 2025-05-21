"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import {
  X,
  ZoomIn,
  ZoomOut,
  RefreshCcw,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

export default function FactoryGallery() {
  const params = useSearchParams();
  const router = useRouter();
  const [selected, setSelected] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    { src: "/images/imageGalleryFactory/factory-env (1).webp", alt: "خط تولید دستگاه‌ها" },
    { src: "/images/imageGalleryFactory/factory-env (2).webp", alt: "ماشین‌آلات پیشرفته" },
    { src: "/images/imageGalleryFactory/factory-env (3).webp", alt: "تیم متخصص شاردر" },
    { src: "/images/imageGalleryFactory/factory-env (4).webp", alt: "مهندسین کارخانه" },
    { src: "/images/imageGalleryFactory/factory-env (5).webp", alt: "فرآیند مونتاژ قطعات" },
    { src: "/images/imageGalleryFactory/factory-env (6).webp", alt: "انبار محصولات نهایی" },
  ];

  useEffect(() => {
    const index = params.get("img");
    if (index !== null && !isNaN(Number(index))) {
      const imgIndex = Number(index) - 1;
      if (imgIndex >= 0 && imgIndex < images.length) {
        setSelected(imgIndex);
        setIsModalOpen(true);
        document.body.style.overflow = "hidden";
        const header = document.getElementById("fixed-header");
        if (header) header.style.display = "none";
        return;
      }
    }
    setIsModalOpen(false);
    setSelected(null);
    document.body.style.overflow = "auto";
    const header = document.getElementById("fixed-header");
    if (header) header.style.display = "";
  }, [params]);

  const closeModal = () => {
    router.replace("/", { scroll: false });
    setZoom(1);
  };

  const scrollZoom = useCallback((e) => {
    e.preventDefault();
    const direction = e.deltaY < 0 ? 0.1 : -0.1;
    setZoom((z) => Math.min(Math.max(z + direction, 1), 3));
  }, []);

  const nextImage = () => {
    if (selected === null) return;
    const next = (selected + 1) % images.length;
    router.replace(`?img=${next + 1}`, { scroll: false });
  };

  const prevImage = () => {
    if (selected === null) return;
    const prev = (selected - 1 + images.length) % images.length;
    router.replace(`?img=${prev + 1}`, { scroll: false });
  };

  return (
    <section className="w-full bg-white py-12 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto mb-12 text-center px-4">
        <h1 className="text-4xl font-extrabold text-teal-600 mb-4">گالری عکس‌های کارخانه شاردر</h1>
        <p className="text-lg text-gray-700">
          نگاهی نزدیک به محیط و تجهیزات کارخانه شاردر. روی هر عکس کلیک کنید تا آن را بزرگ ببینید و جزئیات را بهتر لمس کنید.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => router.replace(`?img=${idx + 1}`, { scroll: false })}
            className="relative shadow-2xl cursor-pointer rounded-lg border-6 !border-double border-purple-400 bg-white overflow-hidden group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={600}
              className="object-cover w-full h-[220px] transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <div className="text-white text-center flex flex-col items-center gap-1 px-4 select-none">
                <span className="text-2xl">🔍</span>
                <span className="text-sm sm:text-base font-bold drop-shadow-md">
                  برای بزرگ‌نمایی کلیک کنید
                </span>
              </div>
            </div>

            <div className="p-3 text-center text-purple-700 font-semibold text-sm sm:text-base">
              {img.alt}
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selected !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50"
          onWheel={scrollZoom}
        >
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center px-4">
            <Image
              src={images[selected].src}
              alt={images[selected].alt}
              width={1200}
              height={800}
              style={{ transform: `scale(${zoom})` }}
              className="object-contain max-h-full max-w-full transition-transform duration-300 rounded-lg shadow-2xl"
            />

            <div className="absolute top-4 right-4 flex gap-2">
              <button onClick={closeModal} className="text-white p-2 bg-purple-600 rounded-full" title="بستن">
                <X className="w-5 h-5" />
              </button>
              <button onClick={() => setZoom((z) => Math.min(z + 0.1, 3))} className="text-white p-2 bg-purple-600 rounded-full" title="زوم بیشتر">
                <ZoomIn className="w-5 h-5" />
              </button>
              <button onClick={() => setZoom((z) => Math.max(z - 0.1, 1))} className="text-white p-2 bg-purple-600 rounded-full" title="زوم کمتر">
                <ZoomOut className="w-5 h-5" />
              </button>
              <button onClick={() => setZoom(1)} className="text-white p-2 bg-purple-600 rounded-full" title="ریست زوم">
                <RefreshCcw className="w-5 h-5" />
              </button>
            </div>

            <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 bg-teal-600 rounded-full" title="قبلی">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 bg-teal-600 rounded-full" title="بعدی">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
