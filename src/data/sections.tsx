import { motion } from 'framer-motion';
import { Project } from '../components/Project';

const projects = [
  {
    title: "mywellnessdiary",
    description: "iOS app for tracking food and fitness goals",
    tech: [
      { name: "Swift", color: "bg-[#D86072]" }
    ],
    link: "https://github.com/hannahxyao03/mywellnessdiary",
    previewImage: "https://raw.githubusercontent.com/hannahxyao03/portfolio/refs/heads/main/src/assets/images/mwd-preview.jpg"
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
              description: "Building event-driven Java microservices for payments orchestration using cloud-native tools",
              dotColor: "bg-[#D86072]"
            },
            {
              company: "Monash University",
              date: "Feb 2021 - Nov 2024",
              title: "Bachelor of Computer Science",
              description: "Advanced Computer Science Major",
              dotColor: "bg-[#90C67C]"
            },
            {
              company: "National Australia Bank",
              date: "Jan 2023 - Dec 2023",
              title: "Software Engineer Intern",
              description: "",
              dotColor: "bg-[#80C4E9]"
            }
          ].map((item) => (
            <div key={item.company + item.date} className="relative">
              <div 
                className={`absolute -left-[21px] top-2 w-[12px] h-[12px] rounded-full ${item.dotColor}`}
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
                {item.description !== "" && (
                  <div className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                    <p>{item.description}</p>
                  </div>
                )}
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