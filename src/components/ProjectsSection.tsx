
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, smoothBounceAnimation, textUpDownAnimation } from '@/types/animations';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Coupon Management System",
      description: "A modern dashboard with AI integration for data analytics and insights, featuring real-time data visualization for gift/coupon redeem.",
      tech: ["NextJs", "NodeJs", "AI", "MongoDB"],
      link: "https://repaykaro.com/",
      status: "Ongoing",
      image: "🤖",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Debt Collection Management System",
      description: "Full-stack debt collection solution with comprehensive admin panel for business operations & agent portal .",
      tech: ["PHP", "Html", "CSS", "JavaScript"],
      link: "https://truebusinessminds.com/",
      status: "Completed",
      image: "🛒",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "FLOT:Loan Management System",
      description: "Automated loan management system with auto approval using various automation techniques.",
      tech: ["Node.js", "Adhaar API", "CIBIL API", "Postgres", "AI"],
      link: "https://myflot.com/",
      status: "Completed",
      image: "💬",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "FLOT:Android application",
      description: "Automated loan management system with auto approval using various automation techniques.",
      tech: ["React Native"],
      link: "https://play.google.com/store/apps/details?id=com.myflot&hl=es_419",
      status: "Completed",
      image: "📱",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "LoanOne:Web-Based Loan Management System",
      description: "Automated loan management system with auto approval using various automation techniques.",
      tech: ["Laravel", "Postgres"],
      link: "https://loanone.in/",
      status: "Completed",
      image: "🏠",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Ticket Management Suite",
      description: "Comprehensive ticketing system designed to streamline issue tracking, team collaboration, and workflow management across projects. Includes priority tagging, status updates, deadline alerts, and performance analytics.",
      tech: ["Next.js", "Node.js", "MongoDB", "Socket.io", "Payment Gateway"],
      link: "https://ondalinda.com/",
      status: "Completed",
      image: "🎫",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      title: "Ticket Management Suite",
      description: "Comprehensive ticketing system designed to streamline issue tracking, team collaboration, and workflow management across projects. Includes priority tagging, status updates, deadline alerts, and performance analytics.",
      tech: ["React", "Node.js", "MySQL", "Payment Gateway"],
      link: "https://eboxtickets.com/",
      status: "Completed",
      image: "📋",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      title: "KrCorpLink :Websites",
      description: "Simple Website according to client requirements",
      tech: ["Html", "Bootstrap", "CSS", "JavaScript"],
      link: "https://krcorplink.com/",
      status: "Completed",
      image: "🌐",
      gradient: "from-orange-500 to-red-600"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <motion.span
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
            animate={smoothBounceAnimation}
          >
            Featured Projects
          </motion.span>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{
                y: -15,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                scale: 1.02
              }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Card className="border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm overflow-hidden group h-full transition-all duration-500">
                <CardContent className="p-6">
                  <motion.div
                    className={`h-40 bg-gradient-to-br ${project.gradient} rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="text-6xl"
                      animate={{
                        rotate: [0, 8, -8, 0],
                        scale: [1, 1.15, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      {project.image}
                    </motion.div>
                    <motion.div
                      className="absolute top-2 right-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {project.status}
                    </motion.div>
                  </motion.div>

                  <motion.h3
                    className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-200"
                    whileHover={{ color: "#3b82f6" }}
                    animate={textUpDownAnimation}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed"
                    animate={textUpDownAnimation}
                  >
                    {project.description}
                  </motion.p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        whileHover={{ scale: 1.15, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button onClick={() => window.open(project.link, '_blank')} variant="outline" className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-500 border-blue-200 hover:border-blue-400">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
