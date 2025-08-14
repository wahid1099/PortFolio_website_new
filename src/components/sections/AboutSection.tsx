import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Rocket, Phone, Brain, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import mdWahid from "../../assets/mdwahid.png";

const skills = [
  {
    category: "Frontend",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML",
      "CSS",
    ],
    icon: Code,
  },
  {
    category: "Backend",
    technologies: [
      "Node.js",
      "Django",
      "Express.js",
      "Python",
      "Java",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Firebase",
      "Redis",
      "AWS",
    ],
    icon: Rocket,
  },
  {
    category: "AI/ML",
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "OpenCV",
      "Keras",
    ],
    icon: Brain,
  },
  {
    category: "DevOps",
    technologies: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Linux",
      "Git",
      "GitHub Actions",
      "Jenkins",
      "Terraform",
    ],
    icon: Server,
  },
  {
    category: "Design",
    technologies: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Photoshop",
      "Illustrator",
      "Canva",
    ],
    icon: Palette,
  },
  {
    category: "Mobile App",
    technologies: [
      "Flutter",
      "React Native",
      "Dart",
      "Swift",
      "Kotlin",
      "Firebase",
    ],
    icon: Phone,
  },
];

const experience = [
  {
    year: "2024 - Present",
    title: "Freelance Developer",
    company: "Fiverr",
    description:
      "Providing web development, full-stack solutions, and AI/ML project services to clients worldwide. Delivering high-quality, scalable applications and custom solutions.",
  },
  {
    year: "June 2023 - July 2023",
    title: "Software Engineering Intern",
    company: "Codemen Solutions BD",
    description:
      "Worked on Django-based web applications and web scraping projects. Developed backend APIs, managed databases, and implemented automated data extraction solutions.",
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I design seamless digital experiences through clean, efficient code
            and thoughtful design. Driven by a passion for building solutions
            that truly make an impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="portfolio-card p-8 rounded-2xl">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 rounded-full bg-hero-gradient p-0.5">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                    <img
                      src={mdWahid}
                      alt="MD WAHID"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">MD WAHID</h3>
                  <p className="text-muted-foreground">Full Stack Developer</p>
                </div>
              </div>
              <ul className="text-muted-foreground leading-relaxed mb-6 list-disc ml-6">
                <p>
                  MD Wahid — Computer Science Student | Software Engineer at
                  Daffodil International University
                </p>
                <li>
                  Passionate software engineer with a strong foundation in
                  computer science
                </li>
                <li>
                  Proficient in C, C++, Java, JavaScript, and Python (Python is
                  my favorite for its versatility)
                </li>
                <li>
                  Specialized in web development using Django (backend), React,
                  and Next.js (frontend)
                </li>
                <li>
                  Experienced with MySQL, MongoDB, Prisma, and Redis for data
                  management
                </li>
                <li>
                  Building and deploying full-stack applications with hands-on
                  experience
                </li>
                <li>
                  Exploring machine learning and actively working on ML/DL
                  projects
                </li>
                <li>
                  Diving into DevOps, including containerization and CI/CD
                  practices
                </li>
                <li>Familiar with modern design tools like Figma</li>
                <li>
                  Skilled in version control and collaboration using Git &
                  GitHub
                </li>
                <li>
                  Actively engaged in competitive programming and algorithmic
                  problem-solving
                </li>
              </ul>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Location:</span>
                  <p className="font-medium">Dhaka,BD</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Experience:</span>
                  <p className="font-medium">2+ Years</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Email:</span>
                  <p className="font-medium">wahidahmed890@gmail.com</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Status:</span>
                  <p className="font-medium text-green-500">Available</p>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Experience</h3>
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="portfolio-card p-6 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm text-primary font-medium mb-1">
                        {exp.year}
                      </p>
                      <h4 className="font-semibold mb-1">{exp.title}</h4>
                      <p className="text-sm text-accent font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="portfolio-card border-0 bg-card-gradient hover:shadow-elevated transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-hero-gradient">
                          <skill.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h4 className="text-xl font-semibold">
                          {skill.category}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-muted rounded-full border border-border hover:border-primary transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
