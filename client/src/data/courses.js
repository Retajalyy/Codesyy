export const filters = [
  { key: 'all', label: 'All Courses' },
  { key: 'codeblocks', label: 'Code Blocks (6-9 yrs)' },
  { key: 'webdev', label: 'Web Development (8-13 yrs)' },
  { key: 'python', label: 'Python (10-14 yrs)' },
  { key: 'ai', label: 'AI & Machine Learning (12-17 yrs)' },
  { key: 'cybersecurity', label: 'Cybersecurity (13-17 yrs)' },
];

export const courses = [
  {
    category: 'codeblocks', title: 'Code Blocks Pioneers', ages: 'Ages 6 - 9',
    level: 'Beginner', levelColor: 'text-green-500', icon: 'fa-solid fa-shapes',
    ageBadge: 'bg-yellow-100 text-yellow-800', iconBox: 'bg-yellow-300/40 text-yellow-700',
    btn: 'bg-yellow-400 hover:bg-yellow-500 text-slate-900', btnLabel: 'Book Trial for Code Blocks',
    desc: 'Build colorful 2D animations, interactive stories, and classic arcade games using drag-and-drop block coding while mastering logic puzzles.',
    features: ['Visual Drag & Drop Coding', 'Interactive Storytelling', 'Logic & Problem Solving'],
  },
  {
    category: 'webdev', title: 'Web Development Builder', ages: 'Ages 8 - 13',
    level: 'Intermediate', levelColor: 'text-yellow-500', icon: 'fa-solid fa-globe',
    ageBadge: 'bg-emerald-100 text-emerald-800', iconBox: 'bg-emerald-300/40 text-emerald-700',
    btn: 'bg-emerald-400 hover:bg-emerald-500 text-slate-900', btnLabel: 'Book Trial for Web Dev',
    desc: 'Design and publish real websites using HTML, CSS, and beginner JavaScript — from personal pages to interactive mini-projects.',
    features: ['HTML & CSS Foundations', 'Intro JavaScript Interactivity', 'Publish a Live Website'],
  },
  {
    category: 'python', title: 'Python & App Creator', ages: 'Ages 10 - 14',
    level: 'Intermediate', levelColor: 'text-yellow-500', icon: 'fa-brands fa-python',
    ageBadge: 'bg-cyan-100 text-cyan-800', iconBox: 'bg-cyan-300/40 text-cyan-700',
    btn: 'bg-cyan-400 hover:bg-cyan-500 text-slate-900', btnLabel: 'Book Trial for Python',
    desc: 'Transition from blocks to text code. Master Python syntax, mini-games, and simple app logic with hands-on projects.',
    features: ['Real Python Syntax', 'App Logic & Automation', 'Turtle & Pygame Graphics'],
  },
  {
    category: 'ai', title: 'AI & Future Tech Innovator', ages: 'Ages 12 - 17',
    level: 'Advanced', levelColor: 'text-red-500', icon: 'fa-solid fa-brain',
    ageBadge: 'bg-purple-100 text-purple-800', iconBox: 'bg-purple-300/40 text-purple-700',
    btn: 'bg-purple-500 hover:bg-purple-600 text-white', btnLabel: 'Book Trial for AI',
    desc: 'Train machine learning vision models, build smart chatbots, and understand modern AI algorithms responsibly.',
    features: ['Neural Networks Basics', 'Computer Vision Projects', 'Custom Chatbot Creation'],
  },
  {
    category: 'cybersecurity', title: 'Cybersecurity Defenders', ages: 'Ages 13 - 17',
    level: 'Advanced', levelColor: 'text-red-500', icon: 'fa-solid fa-shield-halved',
    ageBadge: 'bg-rose-100 text-rose-800', iconBox: 'bg-rose-300/40 text-rose-700',
    btn: 'bg-rose-400 hover:bg-rose-500 text-white', btnLabel: 'Book Trial for Cybersecurity',
    desc: 'Learn how digital systems get attacked and defended — safe password practices, network basics, and ethical hacking fundamentals in a safe sandboxed environment.',
    features: ['Digital Safety Fundamentals', 'Network & Systems Basics', 'Ethical Hacking Intro'],
  },
];
