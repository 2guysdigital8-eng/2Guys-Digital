import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact | 2Guys Digital",
    description: "Ready to scale with enterprise AI? Contact 2Guys Digital for a discovery call.",
};

export default function ContactPage() {
    return <ContactClient />;
}
