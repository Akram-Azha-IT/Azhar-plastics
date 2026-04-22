"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useAutoScroll } from "@/hooks/useAutoScroll";

export function Products() {
  const { t } = useLanguage();
  const offerings = t("offerings") || [];
  const autoScrollProps = useAutoScroll(2200);

  return (
    <section id="products" className="py-24 lg:py-32 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mb-20 border-l-4 border-primary pl-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-accent tracking-normal mb-4"
          >
            {t("core.title1")} <span className="text-primary">{t("core.title2")}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 font-medium max-w-2xl"
          >
            {t("core.desc")}
          </motion.p>
        </div>

        <div 
          {...autoScrollProps}
          className="flex flex-row md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {offerings.map((o: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group h-full w-[80vw] sm:w-[340px] md:w-auto shrink-0 snap-center"
            >
              <div className="bg-gray-50 border border-gray-200 p-8 h-full flex flex-col hover:border-primary transition-colors duration-300 relative">
                <span className="absolute top-8 right-8 text-4xl font-black text-gray-200 group-hover:text-primary/20 transition-colors">
                  0{i + 1}
                </span>

                <h3 className="text-xl font-bold text-accent mb-4 group-hover:text-primary transition-colors leading-tight pr-12">
                  {o.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {o.desc}
                </p>

                <div className="mt-auto space-y-4">
                  <div className="h-px bg-gray-200 w-full mb-6" />
                  <ul className="space-y-3">
                    {o.items.map((item: string, j: number) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
