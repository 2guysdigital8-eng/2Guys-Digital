import type { Metadata } from "next";
import ServicesClient from "./_components/ServicesClient";

export const metadata: Metadata = {
    title: "Services | 2Guys Digital",
    description: "Enterprise AI services — Web Systems, AI Engineering, Mobile Platforms, UI/UX. Measurable ROI.",
};

export default function ServicesPage() {
    return <ServicesClient />;
}
