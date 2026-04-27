"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { useAutoScroll } from "@/hooks/useAutoScroll";

export function WhyChoose() {
  const { t } = useLanguage();
  const whyUs = t("whyUs") || [];
  const autoScrollProps = useAutoScroll(2400);

  return (
    <section id="why" className="py-24 lg:py-32 bg-gray-50 flex flex-col items-center">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mb-20 border-l-4 border-primary pl-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-accent tracking-normal mb-4"
          >
            {t("why.title1")} <span className="text-primary">{t("why.title2")}</span>
          </motion.h2>
        </div>

        <div 
          {...autoScrollProps}
          className="flex flex-row md:grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {whyUs.map((w: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative group p-10 bg-white border border-gray-200 hover:border-primary border-t-4 border-t-transparent hover:border-t-primary transition-all duration-300 h-full shadow-sm w-[80vw] sm:w-[340px] md:w-auto shrink-0 snap-center"
            >
              <div className="w-16 h-16 bg-gray-50 flex items-center justify-center mb-8 border border-gray-100 group-hover:bg-primary transition-colors duration-300">
                <img 
                  src={w.icon} 
                  className="w-8 h-8 object-contain group-hover:brightness-0 group-hover:invert transition-all" 
                  alt={w.title} 
                />
              </div>
              
              <h3 className="text-xl font-bold text-accent mb-4">
                {w.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                {w.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
