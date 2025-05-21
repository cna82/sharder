const TrendingItems = [
  {
    icon: "/images/Trending/Warranty.webp",
    title: "خدمات پس از فروش",
  },
  {
    icon: "/images/Trending/Agency.webp",
    title: "اخذ نمایندگی فروش",
  },
  {
    icon: "/images/Trending/OEM.webp",
    title: "تولید لوازم خانگی OEM",
  },
  {
    icon: "/images/Trending/Complaints .webp",
    title: "شکایات و انتقادات",
  },
];

export async function GET() {
  try {
    // اگه بخوای شرط بذاری برای خطا یا نبودن داده
    if (!TrendingItems || TrendingItems.length === 0) {
      return new Response(JSON.stringify({ message: "FAQ پیدا نشد" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(TrendingItems), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("خطا در دریافت FAQ:", error);

    return new Response(
      JSON.stringify({ message: "خطا در سرور. لطفاً بعداً تلاش کنید." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
