"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Hero() {
  const { t, language } = useLanguage();
  const partners = t("partners") || [];
  
  const carouselTexts = t("hero.carousel") as string[];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!carouselTexts || !Array.isArray(carouselTexts) || carouselTexts.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselTexts.length);
    }, 2500); // Fast rotation as requested
    return () => clearInterval(interval);
  }, [carouselTexts]);

  return (
    <section id="home" className="relative md:min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-32 pb-16 md:py-24">
      {/* Cinematic Office/Industrial Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        >
          <source
            src="https://res.cloudinary.com/dys2z2j7s/video/upload/q_auto,f_auto,w_1280/v1776870624/hero-plastic_wsfhb7.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 md:from-white/80 via-white/50 to-white/20 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-70" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >


            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-slate-900 leading-tight mb-4 md:mb-6 tracking-normal">
              {t("hero.title1")} <br className="block" /> 
              <span className="inline-grid overflow-visible py-1">
                <AnimatePresence>
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="col-start-1 row-start-1 text-primary whitespace-normal sm:whitespace-nowrap leading-tight"
                  >
                    {Array.isArray(carouselTexts) && carouselTexts.length > 0 ? carouselTexts[index] : t("hero.title2")}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-6 md:mb-10 font-normal">
              {t("hero.desc")}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 w-full sm:w-auto mt-2 md:mt-4">
              <Link
                href="#contact"
                className="group flex items-center gap-2 text-primary text-base sm:text-lg font-semibold hover:text-primary-dark transition-colors"
              >
                {t("hero.btnConsult") || "Request a Demo"}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 sm:w-5 sm:h-5">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="#partners"
                className="group flex items-center gap-2 text-slate-700 text-base sm:text-lg font-medium hover:text-slate-900 transition-colors"
              >
                {t("hero.btnPartners") || "View Partners"}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 opacity-70 group-hover:opacity-100 sm:w-5 sm:h-5">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

