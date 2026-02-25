import type { Metadata } from "next";
import { jobs } from "@/lib/constants";
import JobViewClient from "./JobViewClient";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const job = jobs.find((j) => j.slug === slug);
    if (!job) return { title: "Job Not Found" };

    return {
        title: `${job.title} | Careers | 2Guys Digital`,
        description: `Join us as a ${job.title}. ${job.fullDescription.slice(0, 160)}...`,
    };
}

export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const job = jobs.find((j) => j.slug === slug);
    if (!job) notFound();

    return <JobViewClient job={job} />;
}
