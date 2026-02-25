import type { Metadata } from 'next';
import CareersClient from './CareersClient';

export const metadata: Metadata = {
    title: 'Careers',
    description: 'Join the 2Guys Digital team. We are looking for ambitious engineers, designers, and AI specialists to build the future.',
};

export default function CareersPage() {
    return <CareersClient />;
}
