import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Imprint | Leisure Workspace", description: "Provider identification and legal information for Leisure Workspace." };

export default function ImprintPage() {
  return <LegalPage eyebrow="LEGAL INFORMATION" title="Imprint" locale="en" englishPath="/en/imprint" germanPath="/impressum">
    <section><h2>Information pursuant to Section 5 DDG</h2><address>Stefan Burian<br />Ahrfeldstraße 68<br />45136 Essen<br />Germany</address></section>
    <section><h2>Contact</h2><p>Phone: <a href="tel:+4917661562513">+49 176 61562513</a><br />Email: <a href="mailto:contact@stefanburian.com">contact@stefanburian.com</a></p></section>
    <section><h2>VAT ID</h2><p>VAT identification number pursuant to Section 27a of the German VAT Act: <strong>DE327651503</strong></p></section>
    <section><h2>Editorial responsibility</h2><address>Stefan Burian<br />Ahrfeldstraße 68<br />45136 Essen<br />Germany</address></section>
    <section><h2>Consumer dispute resolution</h2><p>We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p></section>
    <section><h2>Tool disclaimer</h2><p>The calculators and planning aids are provided as non-binding support. Results are based on assumptions entered by users and do not replace legal, tax or business advice.</p></section>
  </LegalPage>;
}
