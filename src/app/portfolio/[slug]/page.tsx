import type { Metadata } from "next";
import { caseStudies } from "@/lib/constants";
import ProjectViewClient from "./ProjectViewClient";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = caseStudies.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | 2Guys Digital Portfolio`,
        description: project.fullDescription,
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = caseStudies.find((p) => p.slug === slug);
    if (!project) notFound();

    return <ProjectViewClient project={project} />;
}
