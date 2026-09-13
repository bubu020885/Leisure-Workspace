import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Impressum | Leisure Workspace", description: "Impressum und Anbieterkennzeichnung von Leisure Workspace." };

export default function ImpressumPage() {
  return <LegalPage eyebrow="RECHTLICHE INFORMATIONEN" title="Impressum" locale="de" englishPath="/en/imprint" germanPath="/impressum">
    <section><h2>Angaben gemäß § 5 DDG</h2><address>Stefan Burian<br />Ahrfeldstraße 68<br />45136 Essen<br />Deutschland</address></section>
    <section><h2>Kontakt</h2><p>Telefon: <a href="tel:+4917661562513">+49 176 61562513</a><br />E-Mail: <a href="mailto:contact@stefanburian.com">contact@stefanburian.com</a></p></section>
    <section><h2>Umsatzsteuer-ID</h2><p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: <strong>DE327651503</strong></p></section>
    <section><h2>Redaktionell verantwortlich</h2><address>Stefan Burian<br />Ahrfeldstraße 68<br />45136 Essen</address></section>
    <section><h2>Verbraucherstreitbeilegung</h2><p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p></section>
    <section><h2>Hinweis zu den Tools</h2><p>Die bereitgestellten Rechner und Planungshilfen dienen der unverbindlichen Unterstützung. Ergebnisse basieren auf den von Nutzerinnen und Nutzern eingegebenen Annahmen und ersetzen keine rechtliche, steuerliche oder wirtschaftliche Beratung.</p></section>
  </LegalPage>;
}
