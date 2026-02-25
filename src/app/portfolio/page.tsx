import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
    title: "Portfolio | 2Guys Digital",
    description: "Case studies and portfolio work from 2Guys Digital — AI web platforms, fintech, SaaS, and mobile apps.",
};

export default function PortfolioPage() {
    return <PortfolioClient />;
}
