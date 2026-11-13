import type { Metadata } from 'next';
import ResumeContent from './ResumeContent';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Resume of Matt Gordon, Senior Software Engineer: experience, skills, and projects in React, TypeScript, Node.js, and accessible UI.',
  alternates: { canonical: '/resume' }
};

const ResumePage = () => <ResumeContent />;

export default ResumePage;
