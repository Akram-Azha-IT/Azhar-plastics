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
    <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-black/90 backdrop-blur-md border-b border-white/5" : "bg-transparent")}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Nav Links */}
          <div className="flex items-center gap-12">
            <Link href="#home" className="flex items-center gap-3">
              <img
                src="/azhar-cons-logo.png"
                alt="Azhar Plastics"
                className="h-8 w-8 object-cover object-top brightness-0 invert opacity-90 transition-opacity hover:opacity-100"
              />
              <span className="text-[15px] font-medium tracking-tight text-white leading-none hidden sm:block">
                Azhar Plastics
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium text-zinc-400 transition-colors hover:text-white"
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
                className="flex items-center gap-1.5 text-[13px] font-medium text-zinc-400 hover:text-white transition-colors"
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
                    className="absolute top-10 right-0 w-36 bg-zinc-950 shadow-2xl border border-white/10 z-50 rounded-sm overflow-hidden py-1"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLanguage(l.code);
                          setLangMenuOpen(false);
                        }}
                        className={cn(
                          "w-full text-left px-4 py-2 text-[13px] font-medium transition-colors hover:bg-white/5 hover:text-white",
                          language === l.code ? "text-white bg-white/5" : "text-zinc-400"
                        )}
                      >
                        {l.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button variant="primary" asChild className="h-8 px-4 text-[13px] font-medium rounded-[4px] bg-white text-black hover:bg-zinc-200 border-0">
              <Link href="#contact">{t("nav.contact")}</Link>
            </Button>
          </div>

          {/* Mobile Right (Globe + Menu) */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="p-2 text-zinc-400 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    className="absolute top-10 right-0 w-36 bg-zinc-950 shadow-2xl border border-white/10 z-50 rounded-sm overflow-hidden py-1"
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
                          "w-full text-left px-4 py-2 text-[13px] font-medium transition-colors hover:bg-white/5 hover:text-white",
                          language === l.code ? "text-white bg-white/5" : "text-zinc-400"
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
              className="p-2 text-zinc-400 hover:text-white transition-colors"
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
            className="lg:hidden bg-black border-t border-white/5 overflow-auto"
          >
            <div className="p-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xl font-medium tracking-tight text-zinc-300 hover:text-white transition-colors py-4 border-b border-white/5"
                >
                  {t(link.key)}
                </Link>
              ))}



              <div className="pt-8 mb-4">
                <Button variant="primary" className="w-full text-base py-6 rounded-sm bg-white text-black border-0" asChild onClick={() => setMobileMenuOpen(false)}>
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
