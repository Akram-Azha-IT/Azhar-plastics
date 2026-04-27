"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useAutoScroll } from "@/hooks/useAutoScroll";

export function Partners() {
  const { t } = useLanguage();
  const partners = t("partners") || [];
  const autoScrollProps = useAutoScroll(2000);

  return (
    <section id="partners" className="py-24 lg:py-40 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* Left Column: Sticky Title */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-32">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-normal text-black tracking-normal mb-6 leading-tight"
              >
                {t("partners.title1")} <br className="hidden lg:block"/>
                <span className="text-primary">{t("partners.title2")}</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-gray-800 font-normal max-w-sm leading-relaxed mb-8"
              >
                {t("partners.desc")}
              </motion.p>
              
              <div className="hidden lg:flex items-center gap-4 text-base font-semibold text-gray-700 uppercase tracking-wider">
                {partners.length} Global Partners
                <div className="flex-1 h-px bg-slate-100" />
              </div>
            </div>
          </div>

          {/* Right Column: Scrolling Cards */}
          <div 
            {...autoScrollProps}
            className="lg:w-2/3 flex flex-row lg:flex-col gap-6 lg:gap-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory hide-scrollbar pb-8 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0"
          >
            {partners.map((p: any, i: number) => (
              <motion.a
                key={i}
                href={p.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-white border border-slate-200 p-8 hover:bg-slate-50 transition-colors duration-500 flex flex-col relative overflow-hidden cursor-pointer w-[80vw] sm:w-[340px] md:w-auto shrink-0 snap-center"
              >
                {/* Background Glow Effect on Hover */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform translate-x-1/2 -translate-y-1/2" />

                {/* Top Row: Logo & Origin */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8 mb-16 relative z-10">
                  <div className="h-16 flex items-center justify-start mix-blend-multiply opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                    <img 
                      src={p.logo} 
                      alt={p.name} 
                      className="h-full w-auto max-w-[140px] md:max-w-[180px] object-contain grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0" 
                    />
                  </div>
                  
                  <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full backdrop-blur-sm">
                    <span className="text-base font-semibold text-gray-800 uppercase tracking-wider">{p.country}</span>
                    <span className="text-base grayscale group-hover:grayscale-0 transition-all duration-500" title={p.country}>{p.flag}</span>
                  </div>
                </div>

                {/* Bottom Row: Content */}
                <div className="mt-auto relative z-10">
                  <h3 className="text-2xl md:text-3xl font-normal tracking-normal text-black mb-4">
                    {p.name}
                  </h3>
                  <p className="text-gray-800 text-base md:text-base font-normal leading-relaxed max-w-xl mb-10">
                    {p.desc}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-slate-200 pt-6">
                    <span className="text-base font-semibold text-primary uppercase tracking-wider group-hover:text-black transition-colors duration-300">
                      Visit Website
                    </span>
                    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors duration-300">
                      <ArrowUpRight className="w-4 h-4 text-gray-800 group-hover:text-black transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
