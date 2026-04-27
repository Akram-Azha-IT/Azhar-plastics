"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useAutoScroll } from "@/hooks/useAutoScroll";

export function Industries() {
  const { t } = useLanguage();
  const industries = t("industries") || [];
  const autoScrollProps = useAutoScroll(2600);

  return (
    <section id="industries" className="py-24 lg:py-40 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-black tracking-normal mb-6 leading-tight">
              {t("ind.title1")} <span className="text-primary">{t("ind.title2")}</span>
            </h2>
            <p className="text-gray-800 text-lg font-normal leading-relaxed max-w-xl">
              {t("ind.desc")}
            </p>
          </motion.div>
        </div>

        <div 
          {...autoScrollProps}
          className="border-t border-slate-200 w-full flex flex-row md:block overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 gap-4 md:gap-0 mt-8 md:mt-0"
        >
          {industries.map((ind: string, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group w-[80vw] sm:w-[340px] md:w-auto shrink-0 snap-center"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between py-8 md:py-10 lg:py-14 border border-slate-200 md:border-0 md:border-b md:border-slate-200 cursor-pointer transition-colors duration-500 hover:bg-slate-50 px-6 md:-mx-4 lg:px-8 lg:-mx-8 h-48 md:h-auto bg-white md:bg-transparent rounded-sm md:rounded-none relative overflow-hidden group">
                <div className="absolute inset-0 bg-slate-50 md:hidden opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 lg:gap-12 w-full relative z-10">
                  <span className="text-base font-semibold text-primary md:text-gray-700 uppercase tracking-wider w-8 lg:w-12">
                    0{i + 1}
                  </span>
                  <h3 className="text-xl md:text-2xl lg:text-4xl text-black md:text-primary md:group-hover:text-black transition-colors duration-500 font-normal tracking-normal flex-1">
                    {ind}
                  </h3>
                </div>
                
                <div className="flex-shrink-0 opacity-100 md:opacity-0 md:-translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-500 pointer-events-none mt-auto md:mt-0 self-end md:self-auto relative z-10">
                  <ArrowRight className="w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 text-gray-800 md:text-black stroke-[1] md:group-hover:text-black transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
