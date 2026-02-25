import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn more about 2Guys Digital, our mission, and the expert team behind our enterprise AI solutions.',
};

export default function AboutPage() {
    return <AboutClient />;
}
