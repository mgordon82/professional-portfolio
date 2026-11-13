export interface Experience {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  bullets: string[];
  tech: string[];
}

export interface Education {
  credential: string;
  school: string;
  location?: string;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

interface ResumeData {
  name: string;
  pronouns: string;
  title: string;
  summary: string[];
  contact: { email: string; github: string; location: string };
  links: { label: string; url: string }[];
  experience: Experience[];
  education: Education[];
  skills: SkillGroup[];
}

export const resumeData: ResumeData = {
  name: 'Matt Gordon',
  pronouns: 'he/him',
  title: 'Senior Software Engineer',

  summary: [
    'Senior Software Engineer with 12+ years of experience developing user-centered applications across healthcare, education, and enterprise SaaS. Specializing in React, TypeScript, and modern frontend architecture, with hands-on full-stack experience in Node.js, REST APIs, and MongoDB. Experienced in modernizing legacy applications, building reusable UI systems, and establishing development standards across engineering teams.',
    'Combines technical expertise with a collaborative, product-focused approach to delivering intuitive, accessible, and maintainable applications. Passionate about solving meaningful problems through thoughtful engineering, strong UX collaboration, and continuous improvement.'
  ],

  contact: {
    email: 'jobs@mattrgordon.com',
    github: 'https://github.com/mgordon82',
    location: 'Minnesota, USA'
  },

  links: [{ label: 'GitHub', url: 'https://github.com/mgordon82' }],

  experience: [
    {
      role: 'Senior Front-End / Full Stack Engineer',
      company: 'Sempris',
      location: 'Minneapolis, MN',
      start: 'April 2024',
      end: 'November 2025',
      summary:
        'Built Slyce360 to help businesses manage transaction risks and modernized legacy applications.',
      bullets: [
        'Built 12 React features for Slyce360, an enterprise risk management platform launched with 2 initial clients, including transaction dashboards, reporting, and role-based access controls',
        'Developed automated risk detection and reporting workflows designed to flag thousands of potentially noncompliant transactions and alert administrators for timely review',
        'Built transaction dashboards with advanced filtering and pagination, enabling efficient risk investigations across thousands of records without compromising performance',
        'Modernized approximately 10 legacy React applications, improving performance by an estimated 50% and reducing workflow completion time by approximately 20%',
        'Strengthened payment-data security and API integrations while introducing error handling and logging across 10 legacy applications, improving issue detection and troubleshooting'
      ],
      tech: [
        'React',
        'Redux Toolkit',
        'Redux Observable',
        'Next.js',
        'Node.js',
        'MySQL',
        'MongoDB',
        'Twilio'
      ]
    },
    {
      role: 'Senior Web Developer',
      company: 'eLumen',
      location: 'Minneapolis, MN',
      start: 'March 2022',
      end: 'November 2023',
      summary:
        'Built React applications that help colleges and universities manage student learning and assessment.',
      bullets: [
        'Led the transformation of a React prototype into a production-ready architecture, establishing reusable components, routing, and Git workflows for 4 frontend contributors ahead of customer launch',
        'Built core features for Insights, a Canvas-integrated SaaS platform supporting the early rollout to approximately 6 higher education institutions',
        'Built digital curriculum workflows that replaced paper-based processes and streamlined faculty collaboration, reviews, and approvals',
        'Integrated Insights with Canvas using custom JavaScript, enabling faculty across approximately 6 institutions to access curriculum tools without leaving their Canvas workflow',
        'Led accessibility testing and VPAT documentation, coordinating fixes and validating successful WAVE and axe DevTools tests before production release',
        'Mentored 6 software development interns across two semesters, providing performance evaluations and hiring recommendations that contributed to 3 full-time hires'
      ],
      tech: [
        'React',
        'JavaScript',
        'AWS',
        'Jenkins',
        'Jest',
        'PyTest',
        'WCAG 2.1',
        'aXe DevTools',
        'WAVE',
        'Figma',
        'Sketch'
      ]
    },
    {
      role: 'Senior Front-End Developer',
      company: 'Flint Hills Resources',
      location: 'Inver Grove Heights, MN',
      start: 'October 2020',
      end: 'March 2022',
      summary:
        'Built React dashboards to help business teams analyze operational data and forecast performance.',
      bullets: [
        'Built React production simulators for 6 field directors, enabling material cost comparisons, scenario modeling, and saved simulations to support purchasing decisions',
        'Led frontend development of React dashboards extending Power BI reporting with interactive what-if analysis and production forecasting',
        'Translated complex fuel and asphalt formulas into JavaScript and backend calculations, enabling accurate material modeling and cost estimates',
        'Contributed 10+ reusable React component patterns to a shared design library, making consistent UI components available across 5 development teams',
        'Refactored legacy React components and optimized API interactions, data handling, and error management, improving performance by an estimated 10–15%'
      ],
      tech: ['React', 'JavaScript', 'Power BI', 'C3.ai', 'Figma', 'Sketch']
    },
    {
      role: 'UI Software Developer & Designer',
      company: 'Waterfield Technologies',
      location: 'Minneapolis, MN',
      start: 'February 2020',
      end: 'October 2020',
      summary:
        'Built React tools that help businesses manage automated phone systems and customer interactions.',
      bullets: [
        'Developed and packaged React-based Interactive Voice Response (IVR) tools for 12 enterprise clients, maintaining shared functionality and client-specific customizations across on-premise releases',
        'Redesigned an internal React administration platform used by the technical team to manage client configurations, user accounts, and IVR settings',
        'Led frontend development across 2 React applications, improving component reusability, UI consistency, and maintainability'
      ],
      tech: ['React', 'AWS', 'Sketch']
    },
    {
      role: 'Frontend Software Engineer',
      company: 'Optum',
      location: 'Eden Prairie, MN',
      start: 'October 2014',
      end: 'February 2020',
      summary:
        'Built healthcare applications that help medical offices verify patient insurance coverage and benefits.',
      bullets: [
        'Led the migration of the Eligibility & Benefits frontend to React Hooks, optimizing API calls and error handling to improve performance and reliability by an estimated 10–15%',
        'Co-developed a healthcare eligibility platform, migrating AngularJS to React and enabling medical offices to verify insurance coverage electronically instead of calling insurers',
        'Helped establish a shared React component library in Storybook, adopted by 6+ development teams to standardize UI components and branding',
        'Partnered with a senior architect to establish React coding standards, conduct code reviews, and mentor 2–3 junior developers across two teams',
        'Collaborated with UX researchers to simplify forms, improve data visibility, and add contextual tooltips, earning positive user feedback'
      ],
      tech: [
        'React',
        'AngularJS',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Storybook',
        'Agile/Scrum'
      ]
    }
  ],

  education: [
    {
      credential: 'Associate Degree, Electronic Engineering Technology',
      school: 'Wentworth Institute of Technology',
      location: 'Boston, MA, USA'
    },
    {
      credential: 'Complete Node.js Developer Bootcamp',
      school: 'Zero to Mastery'
    },
    {
      credential: 'Complete Web Developer',
      school: 'Zero to Mastery'
    },
    {
      credential: 'Full-Stack Web Development Bootcamp',
      school: 'University of Minnesota'
    }
  ],

  skills: [
    {
      name: 'Frontend Development',
      items: [
        'React',
        'JavaScript',
        'TypeScript',
        'Redux Toolkit',
        'Next.js',
        'HTML5',
        'CSS3',
        'Storybook',
        'React Router'
      ]
    },
    {
      name: 'Backend & APIs',
      items: ['Node.js', 'REST APIs', 'Express', 'GraphQL', 'Twilio']
    },
    { name: 'Databases', items: ['MySQL', 'MongoDB', 'Oracle'] },
    {
      name: 'Cloud & DevOps',
      items: ['AWS', 'AWS Cognito', 'CI/CD', 'Jenkins', 'GitHub', 'Docker']
    },
    {
      name: 'Testing & Accessibility',
      items: ['Jest', 'PyTest', 'WCAG 2.1', 'aXe DevTools', 'WAVE']
    },
    {
      name: 'UI/UX & Product',
      items: ['Figma', 'Sketch', 'Agile/Scrum', 'Component Architecture']
    },
    {
      name: 'AI & Mobile Development',
      items: ['OpenAI API', 'Capacitor', 'Apple HealthKit']
    }
  ]
};
