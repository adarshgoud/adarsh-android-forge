import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Github,
  Download,
  ExternalLink,
  Smartphone,
  Database,
  Bell,
  Wifi,
  Check,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const projectData = {
  "task-management": {
    title: "Task Management App",
    tagline: "Streamline your workflow with intelligent task tracking",
    overview:
      "A comprehensive task management solution designed for teams and individuals who need to stay organized. Built with modern Android development practices, this app delivers a seamless experience for creating, assigning, and tracking tasks across multiple projects.",
    problem:
      "Traditional task management apps often struggle with offline functionality, real-time synchronization, and intuitive user interfaces. Users need a solution that works reliably regardless of connectivity while keeping team members in sync.",
    features: [
      {
        icon: Smartphone,
        title: "Intuitive Interface",
        description:
          "Clean, Material Design 3 interface that makes task management effortless",
      },
      {
        icon: Database,
        title: "Offline-First Architecture",
        description:
          "Room database ensures your data is always available, even without internet",
      },
      {
        icon: Bell,
        title: "Smart Notifications",
        description:
          "Intelligent reminders that adapt to your workflow and priorities",
      },
      {
        icon: Wifi,
        title: "Real-time Sync",
        description:
          "Firebase integration keeps all your devices and team members in sync",
      },
    ],
    techStack: [
      { name: "Kotlin", category: "Language" },
      { name: "Java", category: "Language" },
      { name: "MVVM", category: "Architecture" },
      { name: "Room DB", category: "Database" },
      { name: "Firebase", category: "Backend" },
      { name: "LiveData", category: "Reactive" },
      { name: "WorkManager", category: "Background" },
      { name: "Navigation Component", category: "Navigation" },
    ],
    highlights: [
      "Clean Architecture implementation",
      "Unit and instrumentation tests",
      "CI/CD with GitHub Actions",
      "Performance optimized for low-end devices",
      "Accessibility features included",
    ],
    githubUrl: "https://github.com/adarsh/task-manager",
    apkUrl: "#",
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectData[projectId as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Project not found
          </h1>
          <Link
            to="/"
            className="text-primary hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-gradient-to-b from-accent/50 to-background py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>

              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {project.tagline}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
                <a
                  href={project.apkUrl}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  Download APK
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Screenshots Preview */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <div className="flex justify-center gap-4 md:gap-8">
                {[1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="w-32 sm:w-48 h-56 sm:h-80 bg-card rounded-3xl shadow-card overflow-hidden"
                  >
                    <div className="w-full h-full bg-gradient-to-b from-muted to-secondary flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 mx-auto bg-primary/20 rounded-xl mb-2" />
                        <div className="w-16 sm:w-24 h-2 bg-primary/20 rounded-full mx-auto mb-2" />
                        <div className="w-12 sm:w-20 h-2 bg-primary/10 rounded-full mx-auto" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">
                App Screenshots
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid md:grid-cols-2 gap-8"
              >
                <div className="bg-card rounded-2xl p-8 shadow-soft">
                  <h2 className="text-xl font-bold text-foreground mb-4">
                    Overview
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.overview}
                  </p>
                </div>
                <div className="bg-card rounded-2xl p-8 shadow-soft">
                  <h2 className="text-xl font-bold text-foreground mb-4">
                    Problem Solved
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-2xl font-bold text-foreground text-center mb-12">
                Key Features
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {project.features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="bg-card rounded-2xl p-6 shadow-soft text-center"
                  >
                    <div className="w-12 h-12 mx-auto bg-accent rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack & Highlights */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-card rounded-2xl p-8 shadow-soft"
              >
                <h2 className="text-xl font-bold text-foreground mb-6">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-card rounded-2xl p-8 shadow-soft"
              >
                <h2 className="text-xl font-bold text-foreground mb-6">
                  Highlights
                </h2>
                <ul className="space-y-3">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-3 text-foreground"
                    >
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Architecture Diagram Placeholder */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Architecture Overview
              </h2>
              <div className="bg-card rounded-2xl p-12 shadow-soft">
                <div className="aspect-video bg-gradient-to-br from-muted to-secondary rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="h-12 bg-primary/20 rounded-lg" />
                      <div className="h-12 bg-primary/20 rounded-lg" />
                      <div className="h-12 bg-primary/20 rounded-lg" />
                    </div>
                    <div className="w-px h-8 bg-primary/30 mx-auto" />
                    <div className="w-24 h-12 bg-primary/30 rounded-lg mx-auto" />
                    <div className="w-px h-8 bg-primary/30 mx-auto" />
                    <div className="w-32 h-12 bg-primary/40 rounded-lg mx-auto" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  MVVM + Clean Architecture Diagram
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Interested in this project?
              </h2>
              <p className="text-muted-foreground mb-8">
                Check out the source code or download the APK to try it yourself.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                  View Source Code
                </a>
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-all duration-200"
                >
                  Discuss a Project
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
