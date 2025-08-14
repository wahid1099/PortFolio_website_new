import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const staticProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured online store offering product browsing, detailed views, and a cart for managing items. Users enjoy secure authentication, smooth checkout via AmarPay, and an intuitive design for a convenient shopping experience.",
    image: "https://i.ibb.co.com/LpftQZH/Screenshot-2025-01-06-165934.png",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"],
    github: "https://github.com/wahid1099/multi_vendor_ecom",
    demo: "https://wahidsbdshop.netlify.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Tech and Tips Hub",
    description:
      "A full-stack platform for tech enthusiasts to explore expert tips, user posts, and tutorials. It offers solutions, reviews, and guides with features for both users and admins, all in an easy-to-use interface.",
    image: "https://i.ibb.co.com/z7xvLPq/image.png",
    tech: ["Next.js", "TypeScript", "Mongo Db", "Socket.io", "Express js"],
    github: "https://github.com/wahid1099/tech-tips-frontend",
    demo: "https://techtipshubwahid.netlify.app/",
    featured: true,
  },
];

export const ProjectsSection: React.FC = () => {
  const [apiProjects, setApiProjects] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-backend-theta-ebon.vercel.app/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          // Map API data to match local structure
          const mappedProjects = data.data.map((p, idx) => ({
            id: staticProjects.length + idx + 1,
            title: p.title,
            description: p.description.replace(/<\/?[^>]+(>|$)/g, ""), // remove HTML tags
            image: p.image,
            tech: p.technologies || [],
            github: p.source,
            demo: p.live_preview,
            featured: false, // API projects go into 'Other Projects'
          }));
          setApiProjects(mappedProjects);
        }
      })
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const allProjects = [...staticProjects, ...apiProjects];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in
            full-stack development, UI/UX design, and problem-solving.
          </p>
        </motion.div>

        {/* Featured Projects (only static 1,2) */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center gap-2"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
            Featured Work
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {staticProjects
              .filter((p) => p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="portfolio-card border-0 bg-card-gradient overflow-hidden group hover:shadow-elevated transition-all duration-500">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </div>

                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="p-6 pt-0">
                      <div className="flex gap-3 w-full">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-hero-gradient"
                          asChild
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Other Projects (from API) */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center gap-2"
          >
            <ChevronRight className="w-6 h-6 text-accent" />
            Other Projects
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apiProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="portfolio-card border-0 bg-card-gradient h-full group hover:shadow-elevated transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <CardContent className="p-4">
                    <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-muted"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-muted">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="p-4 pt-0">
                    <div className="flex gap-2 w-full">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-hero-gradient"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a
                href="https://github.com/wahid1099"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
