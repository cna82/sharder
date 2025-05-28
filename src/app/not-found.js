import MotionSection from "@/Components/MotionSection";
import Image from "next/image";

export default function Error() {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-6 py-8  text-white text-center">
      <div className="max-w-md w-full mb-10">
        <Image
          src="/images/404/404.webp"
          alt="صفحه پیدا نشد"
          width={300}
          height={250}
          className="w-full h-auto"
        />
      </div>
      <MotionSection />
    </div>
  );
}
