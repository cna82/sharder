"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Search, AlertTriangle } from "lucide-react";
import React from "react";

const ProductCard = React.memo(({ product }) => (
  <Link href={`/products/${product.id}`}>
    <div className="group relative bg-white border border-gray-200 rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105">
      <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
        <Image
          src={product.imgSrc}
          alt={product.title}
          fill
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 group-hover:opacity-100 opacity-0 backdrop-blur-sm bg-white/30 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-gray-900 text-sm sm:text-base font-semibold">
            مشاهده جزئیات
          </span>
        </div>
      </div>
      <div className="p-4 bg-gray-700 text-center">
        <h3 className="text-lg font-bold text-teal-100">{product.title}</h3>
      </div>
    </div>
  </Link>
));

export default function ProductsClient({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearchTerm(searchTerm), 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title.includes(debouncedSearchTerm);
      const matchesCategory = categoryFilter
        ? product.category === categoryFilter
        : true;
      return matchesSearch && matchesCategory;
    });
  }, [products, debouncedSearchTerm, categoryFilter]);

  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-purple-700 via-teal-600 to-purple-500 text-white py-24 text-center px-6 shadow-inner">
        <h1 className="text-5xl font-extrabold drop-shadow-xl mb-3 tracking-tight">
          محصولات شاردر
        </h1>
        <p className="text-md font-light">
          چرخ‌گوشت‌های خاص ، مخصوص خاص ترین ها{" "}
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 py-12 px-6 md:px-20 bg-gradient-to-br from-white via-purple-50 to-teal-50">
        {/* Search Box */}
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            id="search"
            placeholder=" "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="peer w-full rounded-xl bg-white/50 backdrop-blur-md border text-black border-purple-300 px-12 pt-5 pb-2 text-sm  text-right placeholder-transparent shadow-md"
          />
          <label
            htmlFor="search"
            className="absolute right-12 top-1.5 text-purple-700 text-xs transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs"
          >
            جستجوی محصول
          </label>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-500">
            <Search size={18} />
          </div>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute cursor-pointer left-3 top-1/2 -translate-y-1/2 text-red-400 hover:text-red-600"
              title="پاک کردن"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Category Dropdown */}
        <div className="relative w-full md:w-1/4 text-teal-600">
          <select
            id="category"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            dir="rtl"
            className="peer w-full rounded-xl cursor-pointer bg-white/50 backdrop-blur-md border border-teal-300 px-4 pt-5 pb-2 text-sm shadow-md"
          >
            <option value="">همه دسته‌ها</option>
            <option value="ساده">ساده</option>
            <option value="طرح دار">طرح دار</option>
          </select>
        </div>
      </div>

      {/* Not Found */}
      {filteredProducts.length === 0 && (
        <div className="flex bg-gray-50 flex-col items-center text-center px-6 py-20 animate-bounceIn">
          <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 border border-red-200 shadow-xl">
            <AlertTriangle size={50} className="text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-red-600 mb-2">
              محصولی پیدا نشد!
            </h2>
            <p className="text-sm text-gray-700">
              لطفاً جستجو یا دسته‌بندی دیگری را امتحان کنید.
            </p>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="grid p-10 bg-gradient-to-br from-white border via-purple-50 to-teal-50 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-20 pb-24">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
