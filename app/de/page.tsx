import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";

export const metadata: Metadata = { title: "Leisure Workspace | Besser planen. Schneller entscheiden.", description: "Praktische Tools für Businessplanung, Jahresbudget und Customer Journey in Freizeitattraktionen." };

export default function GermanPage() { return <LandingPage locale="de" />; }
