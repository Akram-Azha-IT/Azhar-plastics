"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Award, Settings, MessageSquare, Globe } from "lucide-react";

export function About() {
  const { t } = useLanguage();
  const features = t("features") || [];

  // Map indices to high-end minimal Lucide icons
  const iconMap = [
    <Award className="w-8 h-8 opacity-70 stroke-[1.5]" key="0" />,
    <Settings className="w-8 h-8 opacity-70 stroke-[1.5]" key="1" />,
    <MessageSquare className="w-8 h-8 opacity-70 stroke-[1.5]" key="2" />,
    <Globe className="w-8 h-8 opacity-70 stroke-[1.5]" key="3" />
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative border-t border-slate-200">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-normal text-black tracking-normal mb-4">
              {t("provide.title1")} <span className="text-primary">{t("provide.title2")}</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-gray-800 leading-relaxed font-normal flex-1"
          >
            {t("provide.desc")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-slate-200">
          {features.map((f: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="bg-white p-8 border-r border-b border-slate-200 transition-colors hover:bg-slate-50 flex flex-col"
            >
              <div className="mb-10 text-black">
                {iconMap[i] || <Globe className="w-8 h-8 opacity-70 stroke-[1.5]" />}
              </div>
              <h3 className="text-lg font-normal tracking-normal text-black mb-3">
                {f.title}
              </h3>
              <p className="text-base text-primary font-normal leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
