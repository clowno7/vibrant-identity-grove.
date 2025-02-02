import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
const certifications = [
    {
        title: "React Development",
        issuer: "Cosmic Code Academy",
        date: "2024",
        icon: _jsx(Award, { className: "w-6 h-6" }),
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
        description: "Advanced React patterns and state management",
        badge: "Elite Developer"
    },
    {
        title: "TypeScript Mastery",
        issuer: "Stellar Learning",
        date: "2023",
        icon: _jsx(Star, { className: "w-6 h-6" }),
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        description: "Advanced TypeScript and design patterns",
        badge: "TypeScript Expert"
    },
    {
        title: "Full Stack Development",
        issuer: "Galaxy Institute",
        date: "2023",
        icon: _jsx(Award, { className: "w-6 h-6" }),
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        description: "Complete web development bootcamp",
        badge: "Full Stack Developer"
    }
];
const Certifications = () => {
    return (_jsxs("section", { id: "certifications", className: "py-20 bg-[#1A1F2C] relative overflow-hidden", children: [_jsxs("div", { className: "container mx-auto px-4", children: [_jsx(motion.h2, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "text-4xl font-bold text-center mb-12 text-[#E5DEFF]", children: "Cosmic Achievements" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: certifications.map((cert, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, className: "relative", children: _jsxs(HoverCard, { children: [_jsx(HoverCardTrigger, { children: _jsxs(motion.div, { whileHover: { scale: 1.05 }, className: "bg-[#2A2F3C] rounded-lg overflow-hidden border border-[#8B5CF6]/20 cursor-pointer", children: [_jsxs("div", { className: "relative h-48", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1F2C]/80" }), _jsx("img", { src: cert.image, alt: cert.title, className: "w-full h-full object-cover" }), _jsx("div", { className: "absolute top-4 right-4 bg-[#8B5CF6] p-2 rounded-full", children: cert.icon })] }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-xl font-bold mb-2 text-[#E5DEFF]", children: cert.title }), _jsx("p", { className: "text-[#9F9EA1] text-sm mb-2", children: cert.issuer }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-[#D3E4FD] text-sm", children: cert.date }), _jsx("span", { className: "px-3 py-1 bg-[#403E43] rounded-full text-xs text-[#D3E4FD]", children: cert.badge })] })] })] }) }), _jsx(HoverCardContent, { className: "w-80 bg-[#2A2F3C] border border-[#8B5CF6]/20", children: _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "text-sm font-semibold text-[#E5DEFF]", children: cert.title }), _jsx("p", { className: "text-sm text-[#9F9EA1]", children: cert.description })] }) })] }) }, cert.title))) })] }), _jsx("div", { className: "absolute top-10 right-10 w-2 h-2 bg-white rounded-full animate-twinkle" }), _jsx("div", { className: "absolute bottom-10 left-10 w-2 h-2 bg-white rounded-full animate-twinkle", style: { animationDelay: '1s' } }), _jsx("div", { className: "absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-twinkle", style: { animationDelay: '1.5s' } })] }));
};
export default Certifications;
