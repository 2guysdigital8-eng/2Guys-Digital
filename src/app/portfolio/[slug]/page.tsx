import type { Metadata } from "next";
import { caseStudies } from "@/lib/constants";
import ProjectViewClient from "./ProjectViewClient";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const project = caseStudies.find((p) => p.slug === params.slug);
    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | 2Guys Digital Portfolio`,
        description: project.fullDescription,
    };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = caseStudies.find((p) => p.slug === params.slug);
    if (!project) notFound();

    return <ProjectViewClient project={project} />;
}
