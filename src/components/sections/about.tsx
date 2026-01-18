import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-1/50 to-transparent" />

            <div className="container relative z-10 mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent-orange text-sm font-medium tracking-wider uppercase mb-4 block">
                            Behind the Code
                        </span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                            Shaping
                            <br />
                            <span className="text-text-secondary">Experiences That</span>
                            <br />
                            <span className="gradient-text">Drive Results</span>
                        </h2>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-text-secondary leading-relaxed">
                            I'm a full-stack developer focused on building clean,
                            performant applications that solve real-world problems.
                            From e-commerce platforms to mobile apps, I bring ideas
                            to life with modern technologies and thoughtful design.
                        </p>
                        <p className="text-text-muted leading-relaxed">
                            Based in Nigeria, I specialize in React, TypeScript, and
                            the modern web stack. Every project I take on is an opportunity
                            to create something meaningful—software that not only works
                            but feels right.
                        </p>

                        <div className="pt-4">
                            <p className="text-sm text-text-muted mb-2">
                                Let's Build Something
                            </p>
                            <p className="text-xl font-heading font-semibold text-text-primary mb-6">
                                Meaningful Together
                            </p>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    className="bg-gradient-to-r from-accent-orange to-accent-amber text-white font-semibold px-6 py-5 rounded-full hover:shadow-lg hover:shadow-accent-orange/25 transition-all duration-300"
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get in touch
                                    <ArrowUpRight className="ml-2 w-4 h-4" />
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {[
                        { value: "3+", label: "Years Experience" },
                        { value: "10+", label: "Projects Completed" },
                        { value: "5+", label: "Happy Clients" },
                        { value: "∞", label: "Coffee Consumed" },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-text-muted">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
