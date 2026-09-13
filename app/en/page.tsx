import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";

export const metadata: Metadata = { title: "Leisure Workspace | Plan better. Decide faster.", description: "Practical business planning, budget and customer journey tools for leisure attractions." };

export default function EnglishPage() { return <LandingPage locale="en" />; }
