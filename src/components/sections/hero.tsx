import { Button } from "../ui/button";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    { number: "01", title: "Web Apps", description: "Full-stack applications" },
    { number: "02", title: "E-commerce", description: "Online stores & payments" },
    { number: "03", title: "Mobile Apps", description: "Cross-platform solutions" },
    { number: "04", title: "APIs", description: "Backend & integrations" },
];

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 z-0">
                {/* Main warm gradient blob */}
                <motion.div
                    className="absolute top-0 right-0 w-[800px] h-[800px] opacity-60"
                    style={{
                        background: "radial-gradient(circle at center, rgba(255,107,53,0.4) 0%, rgba(247,147,26,0.2) 40%, transparent 70%)",
                    }}
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.6, 0.8, 0.6],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Secondary gradient */}
                <motion.div
                    className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-40"
                    style={{
                        background: "radial-gradient(circle at center, rgba(255,139,71,0.3) 0%, transparent 60%)",
                    }}
                    animate={{
                        scale: [1, 1.15, 1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-text-secondary text-lg md:text-xl">
                                Hey, I'm a
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1]"
                        >
                            <span className="gradient-text">Full-Stack</span>
                            <br />
                            <span className="text-text-primary">Developer</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-text-secondary max-w-md leading-relaxed"
                        >
                            Building digital experiences that drive business.
                            From concept to deployment, I create web applications
                            and e-commerce solutions that just work.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-accent-orange to-accent-amber text-white font-semibold px-8 py-6 rounded-full hover:shadow-xl hover:shadow-accent-orange/30 transition-all duration-300"
                                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    View My Work
                                    <ArrowDown className="ml-2 w-5 h-5" />
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-glass-border text-text-primary hover:bg-glass-bg-hover px-8 py-6 rounded-full transition-all duration-300"
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get in Touch
                                    <ArrowUpRight className="ml-2 w-5 h-5" />
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Content - Profile Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        {/* Glow behind image */}
                        <div className="absolute inset-0 translate-x-4 translate-y-4">
                            <div className="w-full h-full rounded-3xl bg-gradient-to-br from-accent-orange/30 via-accent-amber/20 to-transparent blur-3xl" />
                        </div>

                        {/* Profile Image Container */}
                        <div className="relative glass-card p-2 rounded-3xl overflow-hidden">
                            <img
                                src="/profile.png"
                                alt="Muyyassir Edu"
                                className="w-full h-auto rounded-2xl object-cover"
                            />

                            {/* Quote overlay */}
                            <motion.div
                                className="absolute bottom-6 right-6 left-6 glass-panel rounded-xl p-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
                                <p className="text-sm text-text-secondary italic">
                                    "Great code should feel invisible."
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Services Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.number}
                            className="glass-card p-6 group cursor-default"
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                        >
                            <span className="text-accent-orange text-sm font-mono">
                                #{service.number}
                            </span>
                            <h3 className="text-lg font-semibold text-text-primary mt-2 group-hover:text-accent-orange transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-sm text-text-muted mt-1">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <motion.div
                    className="w-6 h-10 rounded-full border-2 border-text-muted/30 flex justify-center pt-2"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-1.5 h-3 rounded-full bg-accent-orange" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
