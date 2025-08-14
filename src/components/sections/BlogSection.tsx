import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications with TypeScript',
    excerpt: 'Learn best practices for structuring large React applications with TypeScript, including advanced patterns and optimization techniques.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Development',
    image: '/api/placeholder/400/250',
    featured: true,
  },
  {
    id: 2,
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Exploring emerging technologies and trends that will shape the future of web development, from AI integration to new frameworks.',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Technology',
    image: '/api/placeholder/400/250',
    featured: true,
  },
  {
    id: 3,
    title: 'Design Systems: Creating Consistent User Experiences',
    excerpt: 'A comprehensive guide to building and maintaining design systems that scale across teams and products.',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Design',
    image: '/api/placeholder/400/250',
    featured: false,
  },
  {
    id: 4,
    title: 'Optimizing Performance in Modern Web Applications',
    excerpt: 'Practical strategies for improving web app performance, including code splitting, lazy loading, and caching techniques.',
    date: '2024-01-01',
    readTime: '7 min read',
    category: 'Performance',
    image: '/api/placeholder/400/250',
    featured: false,
  },
];

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Latest Blog Posts</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I write about web development, design, and technology trends. Here are some of my recent articles.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="portfolio-card border-0 bg-card-gradient overflow-hidden group hover:shadow-elevated transition-all duration-500 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                
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

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="portfolio-card border-0 bg-card-gradient overflow-hidden group hover:shadow-elevated transition-all duration-500">
                <div className="flex gap-4 p-6">
                  <div className="relative overflow-hidden rounded-lg flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-24 h-24 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                      <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary-foreground hover:bg-primary">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>

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
          >
            View All Posts
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};