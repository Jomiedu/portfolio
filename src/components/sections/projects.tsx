import { Button } from "../ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "The Jubol Brand",
        description: "A full-featured e-commerce platform for household essentials. Built with React, TypeScript, and Supabase with complete admin dashboard, cart functionality, and payment integration.",
        tags: ["React", "TypeScript", "Supabase", "Tailwind"],
        image: "/projects/jubol.jpg",
        liveUrl: "https://thejubolbrand.ng",
        githubUrl: null,
        featured: true,
    },
    {
        title: "Tanko",
        description: "Fuel price tracking application helping Nigerians find the best fuel prices in their area. Real-time updates with location-based search.",
        tags: ["Flutter", "Supabase", "Maps API"],
        image: "/projects/tanko.png",
        liveUrl: null, // Coming soon
        githubUrl: null,
        featured: true,
    },
];

const Projects = () => {
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="py-24 relative">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent-orange/5 to-transparent pointer-events-none" />

            <div className="container relative z-10 mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-accent-orange text-sm font-medium tracking-wider uppercase mb-4 block">
                        Selected Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-text-muted max-w-xl">
                        A showcase of applications and websites I've built, from concept to deployment.
                    </p>
                </motion.div>

                {/* Featured Projects */}
                <div className="space-y-12 mb-16">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`glass-card p-6 md:p-10 group ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            <div className="grid lg:grid-cols-2 gap-10 items-center">
                                {/* Project Image */}
                                <motion.div
                                    className={`relative rounded-xl overflow-hidden bg-surface-2 aspect-video ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-contain bg-surface-3"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/20 via-surface-3 to-accent-amber/10 flex items-center justify-center">
                                            <span className="text-3xl font-heading font-bold text-text-muted/50">
                                                {project.title}
                                            </span>
                                        </div>
                                    )}

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-accent-orange/0 group-hover:bg-accent-orange/10 transition-all duration-300" />
                                </motion.div>

                                {/* Project Info */}
                                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div>
                                        <span className="text-accent-orange text-sm font-mono mb-2 block">
                                            #{String(index + 1).padStart(2, '0')}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary group-hover:text-accent-orange transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-text-secondary leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="text-xs px-3 py-1.5 rounded-full bg-surface-3 text-text-muted border border-glass-border"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-4 pt-2">
                                        {project.liveUrl && (
                                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                <Button
                                                    className="bg-gradient-to-r from-accent-orange to-accent-amber text-white font-semibold rounded-full"
                                                    onClick={() => window.open(project.liveUrl!, '_blank')}
                                                >
                                                    View Project
                                                    <ArrowRight className="ml-2 w-4 h-4" />
                                                </Button>
                                            </motion.div>
                                        )}
                                        {!project.liveUrl && (
                                            <span className="text-sm text-text-muted italic py-2">Coming soon</span>
                                        )}
                                        {project.githubUrl && (
                                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="border-glass-border hover:bg-glass-bg-hover rounded-full"
                                                    onClick={() => window.open(project.githubUrl!, '_blank')}
                                                >
                                                    <Github className="w-5 h-5" />
                                                </Button>
                                            </motion.div>
                                        )}
                                        {project.liveUrl && (
                                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="border-glass-border hover:bg-glass-bg-hover rounded-full"
                                                    onClick={() => window.open(project.liveUrl!, '_blank')}
                                                >
                                                    <ExternalLink className="w-5 h-5" />
                                                </Button>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Other Projects Grid */}
                {otherProjects.length > 0 && (
                    <>
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-xl font-heading font-semibold text-text-secondary mb-8"
                        >
                            Other Projects
                        </motion.h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {otherProjects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="glass-card p-6 group"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-lg font-semibold text-text-primary group-hover:text-accent-orange transition-colors">
                                            {project.title}
                                        </h4>
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-text-muted hover:text-accent-orange transition-colors"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                    <p className="text-sm text-text-muted mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.slice(0, 3).map(tag => (
                                            <span key={tag} className="text-xs text-text-muted">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Projects;
