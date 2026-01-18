import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Frontend",
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Supabase", "PostgreSQL", "REST APIs", "Firebase"],
    },
    {
        title: "Mobile",
        skills: ["Flutter", "Dart", "React Native"],
    },
    {
        title: "Tools",
        skills: ["Git", "VS Code", "Figma", "Vercel", "GitHub"],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-surface-1 via-transparent to-surface-1" />

            <div className="container relative z-10 mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-accent-orange text-sm font-medium tracking-wider uppercase mb-4 block">
                        Tech Stack
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                        Skills & <span className="gradient-text">Technologies</span>
                    </h2>
                    <p className="text-text-muted max-w-xl mx-auto">
                        The tools and technologies I use to bring ideas to life.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-6"
                        >
                            <h3 className="text-lg font-heading font-semibold text-accent-orange mb-4">
                                {category.title}
                            </h3>
                            <ul className="space-y-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.li
                                        key={skill}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-3 text-text-secondary group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-orange/50 group-hover:bg-accent-orange transition-colors" />
                                        <span className="group-hover:text-text-primary transition-colors">
                                            {skill}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
