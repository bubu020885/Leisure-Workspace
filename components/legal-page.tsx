"use client";

import { useEffect, type ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Brand } from "@/components/brand";

export function LegalPage({ eyebrow, title, updated, locale = "de", englishPath, germanPath, children }: { eyebrow: string; title: string; updated?: string; locale?: "en" | "de"; englishPath: string; germanPath: string; children: ReactNode }) {
  const isGerman=locale === "de"; const home=`/${locale}`;
  useEffect(() => { document.documentElement.lang=locale; }, [locale]);
  return <>
    <header className="legal-header"><div className="legal-container legal-header-inner"><a href={home} className="legal-brand" aria-label="Leisure Workspace home"><Brand /></a><div className="legal-header-actions"><div className="language-switch" aria-label="Language"><a href={englishPath} lang="en" aria-current={!isGerman ? "page" : undefined}>EN</a><span>/</span><a href={germanPath} lang="de" aria-current={isGerman ? "page" : undefined}>DE</a></div><a className="legal-back" href={home}><ArrowLeft size={17} />{isGerman ? "Zurück zu den Tools" : "Back to the tools"}</a></div></div></header>
    <main className="legal-main"><div className="legal-container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{updated && <p className="legal-updated">{isGerman ? "Stand" : "Last updated"}: {updated}</p>}<div className="legal-content">{children}</div></div></main>
    <footer className="legal-footer"><div className="legal-container"><span>© 2026 Leisure Workspace</span><nav aria-label="Legal information"><a href={isGerman ? "/impressum" : "/en/imprint"}>{isGerman ? "Impressum" : "Imprint"}</a><a href={isGerman ? "/datenschutz" : "/en/privacy"}>{isGerman ? "Datenschutz" : "Privacy"}</a></nav></div></footer>
  </>;
}
