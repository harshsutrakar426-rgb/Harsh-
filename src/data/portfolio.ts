export type Skill = {
  name: string;
  description: string;
  category: string;
};

export type Project = {
  title: string;
  status: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  accent: string;
};

export const portfolio = {
  profile: {
    name: 'Harsh Sutrakar',
    role: 'Student Developer | Web Developer | Creative Technologist',
    location: 'Madhya Pradesh, India',
    tagline: 'BUILDING THE DIGITAL FUTURE.',
    subtagline: 'Turning Ideas Into Interactive Experiences.',
    about:
      "I'm Harsh Sutrakar, a student developer passionate about building modern websites, interactive digital experiences, and technology-driven projects. I enjoy transforming ideas into functional products through creativity, experimentation, and code.",
    availability: {
      enabled: true,
      label: 'Open to creative collaborations',
      status: 'Open to creative projects',
    },
    avatarInitials: 'HS',
  },
  github: {
    username: 'YOUR_GITHUB_USERNAME',
    includeLiveData: false,
  },
  contact: {
    email: 'harshsutrakar426@gmail.com',
    formService: '',
  },
  socialLinks: {
    github: '',
    instagram: '',
    linkedin: '',
    email: 'harshsutrakar426@gmail.com',
  },
  skills: [
    { name: 'HTML', description: 'Semantic structure and accessible UI foundations.', category: 'Frontend' },
    { name: 'CSS', description: 'Responsive layouts, styling systems, and polish.', category: 'Frontend' },
    { name: 'JAVASCRIPT', description: 'Interactivity, logic, and dynamic enhancements.', category: 'Frontend' },
    { name: 'REACT', description: 'Reusable components and UI architecture.', category: 'Frontend' },
    { name: 'GIT', description: 'Version control and collaborative workflows.', category: 'Workflow' },
    { name: 'GITHUB', description: 'Repository workflows, publishing, and sharing.', category: 'Workflow' },
    { name: 'RESPONSIVE DESIGN', description: 'Mobile-first interfaces for varied screen sizes.', category: 'UX' },
    { name: 'UI/UX DESIGN', description: 'User-focused design and digital experiences.', category: 'UX' },
  ] as Skill[],
  projects: [
    {
      title: 'Smart Water Security Index',
      status: 'Live',
      category: 'Science • Web Development • Water Security',
      description:
        'A student-led project exploring water security through survey information, environmental parameters, and water-quality indicators.',
      features: ['Water security survey', 'Index calculations', 'Data visualizations', 'Survey reports'],
      technologies: ['React', 'Data Visualization', 'Science'],
      liveUrl: 'https://smartwatersecurtiy.netlify.app/',
      repoUrl: '',
      accent: 'rgba(83,214,255,0.25)',
    },
    {
      title: 'Studymate — Study Platform',
      status: 'Concept / In Development',
      category: 'Education • Product • Learning',
      description:
        'A learning-platform concept focused on educational resources, revision, notes, and practice questions.',
      features: ['Study notes', 'Revision workflow', 'Practice questions'],
      technologies: ['UX', 'Learning', 'Product'],
      repoUrl: '',
      accent: 'rgba(141,116,255,0.22)',
    },
    {
      title: 'More Projects',
      status: 'Growing',
      category: 'Creative • Frontend • Prototypes',
      description:
        'A reusable platform for future experiments, prototypes, and creative builds.',
      features: ['Interactive builds', 'Design experiments', 'Web prototypes'],
      technologies: ['Creative Dev', 'UI', 'Frontend'],
      accent: 'rgba(255,255,255,0.12)',
    },
  ] as Project[],
  dashboard: {
    featuredProject: 'Smart Water Security Index',
    technologies: ['React', 'TypeScript', 'CSS', 'GitHub'],
    status: 'Live project + ongoing experiments',
    learning: ['Advanced UI systems', 'Modern frontend patterns', 'Creative dev workflows'],
  },
};
