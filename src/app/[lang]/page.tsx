import { notFound } from "next/navigation";
import type { Language } from "@/context/LanguageContext";
import Home from "../page";
import { LanguageRouteSetter } from "./LanguageRouteSetter";

const supportedLanguages: readonly Language[] = ["en", "fr", "ar", "de"];

export default async function LangPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!supportedLanguages.includes(lang as Language)) notFound();

  return (
    <>
      <LanguageRouteSetter lang={lang as Language} />
      <Home />
    </>
  );
}

