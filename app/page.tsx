"use client";

import { useEffect } from "react";
import { Brand } from "@/components/brand";

export default function LanguageEntry() {
  useEffect(() => {
    const preferred = navigator.languages?.[0] || navigator.language || "en";
    window.location.replace(preferred.toLowerCase().startsWith("de") ? "/de" : "/en");
  }, []);

  return <main className="language-entry"><Brand /><p>Choose your language · Sprache auswählen</p><div className="language-entry-links"><a href="/en">English</a><a href="/de">Deutsch</a></div></main>;
}
