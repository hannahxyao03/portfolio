import { motion } from 'framer-motion';
import { Project } from '../components/Project';

const projects = [
  {
    title: "mywellnessdiary",
    description: "add description here",
    tech: [
      { name: "Swift", color: "blue" }
    ],
    link: "https://github.com/hannahxyao03/mywellnessdiary",
    previewImage: "https://personal-site-phi-snowy.vercel.app/assets/cypherchat-7f589c33.png"
  },
  {
    title: "more coming soon!",
    description: "add description here",
    tech: [
      { name: "React", color: "cyan" },
      { name: "JavaScript", color: "yellow" },
      { name: "Node.js", color: "green" },
      { name: "Supabase", color: "emerald" }
    ],
    link: "https://github.com/hannahxyao03",
    previewImage: "https://personal-site-phi-snowy.vercel.app/assets/soleexchange1-40b3b5a8.png"
  }
];

export const sections = [
    {
      title: "Timeline",
      content: (
        <div className="space-y-4 mb-8">
          {[
            {
              company: "National Australia Bank",
              date: "Jan 2024 - Now",
              title: "Associate Software Engineer",
              description: ["add description here"],
              dotColor: "bg-blue-500"
            },
            {
              company: "Monash University",
              date: "Feb 2021 - Nov 2024",
              title: "B.S. Computer Science",
              description: ["add description here"],
              dotColor: "bg-amber-300"
            },
            {
              company: "National Australia Bank",
              date: "Jan 2023 - Dec 2023",
              title: "Software Engineer Intern",
              description: ["add description here"],
              dotColor: "bg-green-500"
            }
          ].map((item) => (
            <div key={item.company + item.date} className="relative">
              <div 
                className={`absolute -left-[17px] top-2 w-[9px] h-[9px] rounded-full ${item.dotColor} ring-4 ring-white dark:ring-gray-900`}
              />
              <motion.div
                className="group py-1 transition-colors"
                whileHover={{ scale: 1.05 }}
                style={{ transformOrigin: 'left' }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <p className="font-medium">{item.company}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">{item.date}</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">{item.title}</p>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                  {item.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Personal Projects",
      content: (
        <div className="space-y-4">
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      )
    }
  ]