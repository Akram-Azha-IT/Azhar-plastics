"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function Hero() {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";
  const partners = t("partners") || [];
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Defer video src loading until after page paint for faster LCP
    const video = videoRef.current;
    if (!video) return;

    // Set src after initial paint so the poster image loads first
    const timer = setTimeout(() => {
      video.src = "/videos/hero-plastic.mp4";
      video.load();
      video.play().catch(() => {/* autoplay blocked, fine */});
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[85vh] md:h-[900px] flex flex-col justify-start overflow-hidden bg-black py-32 md:py-0">
      {/* Cinematic Office/Industrial Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 md:from-black/80 via-black/60 to-black/20 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 md:pt-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-400 mb-6 md:mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-zinc-500"></span>
              {t("hero.tag")}
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] font-serif text-white leading-[1.05] md:leading-[1.1] mb-6 md:mb-8 tracking-tight">
              {t("hero.title1")} <br className="hidden sm:block" /> {t("hero.title2")}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-zinc-200 max-w-xl leading-relaxed mb-10 md:mb-12 font-normal">
              {t("hero.desc")}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Link
                href="#contact"
                className="flex items-center justify-center bg-white text-black px-8 py-4 text-[13px] md:text-[14px] font-medium rounded-sm hover:bg-zinc-200 transition-colors w-full sm:w-auto text-center tracking-wide uppercase"
              >
                {t("hero.btnConsult") || "Request a Demo"}
              </Link>

              <Link
                href="#partners"
                className="flex items-center justify-center bg-transparent border border-white/20 text-white px-8 py-4 text-[13px] md:text-[14px] font-medium rounded-sm hover:bg-white/5 transition-colors w-full sm:w-auto text-center tracking-wide uppercase"
              >
                {t("hero.btnPartners") || "View Partners"}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}

