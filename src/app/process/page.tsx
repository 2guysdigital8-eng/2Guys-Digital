import type { Metadata } from "next";
import ProcessClient from "./ProcessClient";

export const metadata: Metadata = {
    title: "Our Process | 2Guys Digital",
    description: "Our 6-phase AI-augmented development process engineered for exponential ROI and speed-to-market.",
};

export default function ProcessPage() {
    return <ProcessClient />;
}
