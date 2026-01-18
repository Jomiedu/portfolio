import { Button } from "../ui/button";
import { Mail, Instagram, Linkedin, ArrowUpRight, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "edumuyyassir@gmail.com";

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const socials = [
        {
            name: "Instagram",
            handle: "@jomigramm",
            url: "https://instagram.com/jomigramm",
            icon: Instagram,
        },
        {
            name: "LinkedIn",
            handle: "Muyyassir Edu",
            url: "https://linkedin.com/in/muyyassir-edu",
            icon: Linkedin,
        },
    ];

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-0">
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-t from-accent-orange/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-b from-accent-amber/10 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    {/* Header */}
                    <span className="text-accent-orange text-sm font-medium tracking-wider uppercase mb-4 block">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                        Let's Work <span className="gradient-text">Together</span>
                    </h2>
                    <p className="text-lg text-text-secondary mb-12 max-w-xl mx-auto">
                        Have a project in mind? Looking to partner or collaborate?
                        I'd love to hear from you.
                    </p>

                    {/* Email Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-10 mb-12"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-orange to-accent-amber flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm text-text-muted mb-1">Email me at</p>
                                    <p className="text-xl font-semibold text-text-primary">{email}</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        variant="outline"
                                        className="border-glass-border hover:bg-glass-bg-hover rounded-full"
                                        onClick={copyEmail}
                                    >
                                        {copied ? (
                                            <>
                                                <Check className="w-4 h-4 mr-2 text-green-500" />
                                                Copied!
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-4 h-4 mr-2" />
                                                Copy
                                            </>
                                        )}
                                    </Button>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        className="bg-gradient-to-r from-accent-orange to-accent-amber text-white font-semibold rounded-full"
                                        onClick={() => window.location.href = `mailto:${email}`}
                                    >
                                        Send Email
                                        <ArrowUpRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-text-muted text-sm mb-6">Or find me on</p>
                        <div className="flex justify-center gap-4">
                            {socials.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-card px-6 py-4 flex items-center gap-3 group"
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <social.icon className="w-5 h-5 text-text-muted group-hover:text-accent-orange transition-colors" />
                                    <div className="text-left">
                                        <p className="text-xs text-text-muted">{social.name}</p>
                                        <p className="text-sm font-medium text-text-primary group-hover:text-accent-orange transition-colors">
                                            {social.handle}
                                        </p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
