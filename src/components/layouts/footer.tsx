import { Instagram, Linkedin, Mail, Heart, Github } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socials = [
        { icon: Mail, href: "mailto:edumuyyassir@gmail.com", label: "Email" },
        { icon: Instagram, href: "https://instagram.com/jomigramm", label: "Instagram" },
        { icon: Linkedin, href: "https://linkedin.com/in/muyyassir-edu", label: "LinkedIn" },
        { icon: Github, href: "https://github.com/Jomiedu", label: "GitHub" },
    ];

    return (
        <footer className="py-12 border-t border-glass-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="text-xl font-heading font-bold"
                        whileHover={{ scale: 1.05 }}
                    >
                        Muyyassir<span className="text-accent-orange">.</span>
                    </motion.a>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socials.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-text-muted hover:text-accent-orange hover:border-accent-orange/30 transition-all"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-text-muted flex items-center gap-1">
                        © {currentYear} Muyyassir Edu. Made with
                        <Heart className="w-4 h-4 text-accent-coral fill-accent-coral" />
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
