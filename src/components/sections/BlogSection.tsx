import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BlogPost {
  _id: string;
  title: string;
  image: string;
  tags: string[];
  description: string;
  createdAt: string;
}

export const BlogSection: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Helper function to remove HTML tags/entities from description
  const stripHTML = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://portfolio-backend-theta-ebon.vercel.app/api/articles"
        );
        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
          setBlogPosts(data.data);
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section id="blog" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I write about web development, design, and technology trends. Here
            are some of my recent articles.
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <p className="text-center text-muted-foreground">
            Loading articles...
          </p>
        )}

        {/* Blog Grid */}
        {!loading && (
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="portfolio-card border-0 bg-card-gradient overflow-hidden group hover:shadow-elevated transition-all duration-500 h-full">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {post.tags?.[0] || "General"}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />5 min read
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed line-clamp-3">
                      {stripHTML(post.description)}
                    </p>
                  </CardContent>

                  {/* Footer */}
                  <CardFooter className="p-6 pt-0">
                    <Button
                      variant="ghost"
                      className="group/btn p-0 h-auto font-medium text-primary hover:text-primary-foreground hover:bg-primary"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.article>
            ))}
          </div>
        )}

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
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
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
