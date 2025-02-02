import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import { Button } from './ui/button';
const SocialLinks = () => {
    const socials = [
        {
            icon: Github,
            link: 'https://github.com/GiridharMalagi', // Update with your GitHub username
            label: 'GitHub'
        },
        {
            icon: Linkedin,
            link: 'https://linkedin.com/in/giridhar-malagi', // Update with your LinkedIn username
            label: 'LinkedIn'
        },
        {
            icon: Twitter,
            link: 'https://twitter.com/GiridharMalagi', // Update with your Twitter username
            label: 'Twitter'
        },
        {
            icon: Instagram,
            link: 'https://instagram.com/giridhar_malagi', // Update with your Instagram username
            label: 'Instagram'
        },
        {
            icon: Mail,
            link: 'mailto:giridharmalagi@gmail.com', // Update with your email
            label: 'Email'
        },
    ];
    return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.6 }, className: "flex gap-4 mt-6", children: socials.map((social) => (_jsx(Button, { variant: "ghost", size: "icon", className: "rounded-full hover:scale-110 transition-transform", asChild: true, children: _jsx("a", { href: social.link, target: "_blank", rel: "noopener noreferrer", "aria-label": social.label, children: _jsx(social.icon, { className: "h-5 w-5" }) }) }, social.label))) }));
};
export default SocialLinks;
