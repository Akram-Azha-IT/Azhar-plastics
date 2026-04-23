"use client";

import { useEffect } from "react";
import { useLanguage, type Language } from "@/context/LanguageContext";

export function LanguageRouteSetter({ lang }: { lang: Language }) {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    if (language !== lang) setLanguage(lang);
  }, [lang, language, setLanguage]);

  return null;
}

