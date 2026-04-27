"use client";

import * as React from "react";
import Link from "next/link";
import { useLanguage, type Language } from "@/context/LanguageContext";
import { Button, cn } from "@/components/ui/button";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", key: "nav.home" },
  { href: "#about", key: "nav.about" },
  { href: "#products", key: "nav.products" },
  { href: "#partners", key: "nav.partners" },
  { href: "#industries", key: "nav.industries" },
  { href: "#contact", key: "nav.contact" },
];

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [langMenuOpen, setLangMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "ar", label: "العربية" },
    { code: "de", label: "Deutsch" },
  ];

  const currentLang = languages.find((l) => l.code === language);

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm backdrop-blur-md border-b border-slate-100" : "bg-transparent")}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Nav Links */}
          <div className="flex items-center gap-12">
            <Link href="#home" className="flex items-center gap-3">
              <img
                src="/azharplastics-logo.png"
                alt="Azhar Plastics"
                className="h-8 w-8 object-cover object-top  opacity-90 transition-opacity hover:opacity-100"
              />
              <span className="text-[15px] font-medium tracking-normal text-black leading-none hidden sm:block">
                Azhar Plastics
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-gray-800 transition-colors hover:text-black"
                >
                  {t(link.key)}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Lang Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 text-base font-medium text-gray-800 hover:text-black transition-colors"
              >
                {currentLang?.label || language}
                <ChevronDown className={cn("w-3 h-3 opacity-50 transition-transform", langMenuOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    className="absolute top-10 right-0 w-36 bg-white shadow-2xl border border-slate-200 z-50 rounded-sm overflow-hidden py-1"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLanguage(l.code);
                          setLangMenuOpen(false);
                        }}
                        className={cn(
                          "w-full text-left px-4 py-2 text-base font-medium transition-colors hover:bg-slate-50 hover:text-black",
                          language === l.code ? "text-black bg-slate-50" : "text-gray-800"
                        )}
                      >
                        {l.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button variant="primary" asChild className="h-8 px-4 text-base font-medium rounded-[4px] bg-primary text-white hover:bg-primary-dark border-0">
              <Link href="#contact">{t("nav.contact")}</Link>
            </Button>
          </div>

          {/* Mobile Right (Globe + Menu) */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="p-2 text-gray-800 hover:text-black transition-colors"
              >
                <Globe className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    className="absolute top-10 right-0 w-36 bg-white shadow-2xl border border-slate-200 z-50 rounded-sm overflow-hidden py-1"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLanguage(l.code);
                          setLangMenuOpen(false);
                          setMobileMenuOpen(false);
                        }}
                        className={cn(
                          "w-full text-left px-4 py-2 text-base font-medium transition-colors hover:bg-slate-50 hover:text-black",
                          language === l.code ? "text-black bg-slate-50" : "text-gray-800"
                        )}
                      >
                        {l.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-800 hover:text-black transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-auto"
          >
            <div className="p-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xl font-medium tracking-normal text-gray-800 hover:text-black transition-colors py-4 border-b border-slate-100"
                >
                  {t(link.key)}
                </Link>
              ))}



              <div className="pt-8 mb-4">
                <Button variant="primary" className="w-full text-base py-6 rounded-sm bg-primary text-white border-0 hover:bg-primary-dark" asChild onClick={() => setMobileMenuOpen(false)}>
                  <Link href="#contact">{t("nav.contact")}</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
