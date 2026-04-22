"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { ArrowUp, Building2, ExternalLink, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-12 relative border-t border-white/10 mt-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16 lg:items-start text-left">
          
          {/* Logo & Parent Company */}
          <div className="space-y-6">
            <Link href="#home" className="flex items-center gap-3 w-fit">
              <img src="/azhar-cons-logo.png" alt="Azhar Plastics" className="h-8 w-8 object-cover object-top brightness-0 invert opacity-90 transition-opacity" />
              <span className="text-lg font-medium tracking-tight text-white uppercase">Azhar Plastics</span>
            </Link>
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              <Building2 className="w-4 h-4" />
              {t("footer.partOf")}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">{t("contact.title")}</h4>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                <span className="text-[12px] font-medium text-zinc-400 group-hover:text-white transition-colors">info@azhar-cons.com</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                <span className="text-[12px] font-medium text-zinc-400 group-hover:text-white transition-colors">+212 521 226 130</span>
              </div>
              <div className="flex items-start gap-3 group max-w-[280px]">
                <MapPin className="w-4 h-4 text-zinc-500 mt-0.5 group-hover:text-white transition-colors" />
                <span className="text-[12px] font-medium text-zinc-400 leading-relaxed group-hover:text-white transition-colors">
                  Kamal Park Center, Bureau 30, Mohammedia
                </span>
              </div>
            </div>
          </div>

          {/* Groups */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">Groups</h4>
            <div className="flex flex-col gap-3">
              <a href="https://www.azhar-cons.com" target="_blank" rel="noopener noreferrer" className="text-[12px] font-medium text-zinc-500 hover:text-white flex items-center gap-2 transition-colors">
                Azhar Cons <ExternalLink className="w-3 h-3 opacity-30" />
              </a>
              <a href="https://www.azhar-it.com" target="_blank" rel="noopener noreferrer" className="text-[12px] font-medium text-zinc-500 hover:text-white flex items-center gap-2 transition-colors">
                Azhar IT <ExternalLink className="w-3 h-3 opacity-30" />
              </a>
              <a href="https://www.azhar-services.com" target="_blank" rel="noopener noreferrer" className="text-[12px] font-medium text-zinc-500 hover:text-white flex items-center gap-2 transition-colors">
                Azhar Services <ExternalLink className="w-3 h-3 opacity-30" />
              </a>
            </div>
          </div>

        </div>

        {/* Legal & Scroll */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-600">
            {t("footer.rights")}
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors"
          >
            Top
            <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
