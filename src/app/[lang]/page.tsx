import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { Language } from "@/context/LanguageContext";
import Home from "../page";
import { LanguageRouteSetter } from "./LanguageRouteSetter";

const supportedLanguages: readonly Language[] = ["en", "fr", "ar", "de"];
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://azharplastics.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    alternates: {
      canonical: `${siteUrl}/${lang}`,
    },
  };
}

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

