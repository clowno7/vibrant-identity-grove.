import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
const projects = [
    {
        title: 'Nebula Navigator',
        description: 'A full-stack cosmic exploration platform built with React and Node.js',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
        link: '#',
        tags: ['React', 'Node.js', 'MongoDB'],
        category: 'Web Development'
    },
    {
        title: 'Stellar Dashboard',
        description: 'Real-time space mission control dashboard with live updates',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        link: '#',
        tags: ['React Native', 'Firebase', 'WebSocket'],
        category: 'Mobile Development'
    },
    {
        title: 'Cosmic Analytics',
        description: 'AI-powered space data visualization and analysis platform',
        image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
        link: '#',
        tags: ['Python', 'TensorFlow', 'React'],
        category: 'Data Science'
    },
];
const Projects = () => {
    const { toast } = useToast();
    const handleProjectClick = (project) => {
        if (project.link === '#') {
            toast({
                title: "Project in Another Dimension",
                description: "This cosmic creation is still materializing. Check back soon!",
            });
        }
        else {
            window.open(project.link, '_blank');
        }
    };
    return (_jsxs("section", { id: "projects", className: "py-20 bg-[#1A1F2C] relative", children: [_jsxs("div", { className: "container mx-auto px-4", children: [_jsx(motion.h2, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "text-4xl font-bold text-center mb-12 text-[#E5DEFF]", children: "Cosmic Creations" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: projects.map((project, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, whileHover: { y: -10 }, className: "bg-[#2A2F3C] rounded-lg overflow-hidden shadow-lg cursor-pointer border border-[#8B5CF6]/20", onClick: () => handleProjectClick(project), children: [_jsxs("div", { className: "relative group h-48", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1F2C]/80" }), _jsx("img", { src: project.image, alt: project.title, className: "w-full h-full object-cover transition-transform group-hover:scale-110" }), _jsx("div", { className: "absolute inset-0 bg-[#8B5CF6]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm", children: _jsx(Button, { variant: "secondary", className: "bg-[#8B5CF6] text-white hover:bg-[#7C4DEF]", children: "Explore Project" }) })] }), _jsxs("div", { className: "p-6", children: [_jsx("div", { className: "text-xs font-medium text-[#8B5CF6] mb-2", children: project.category }), _jsx("h3", { className: "text-xl font-bold mb-2 text-[#E5DEFF]", children: project.title }), _jsx("p", { className: "text-[#9F9EA1] mb-4", children: project.description }), _jsx("div", { className: "flex flex-wrap gap-2", children: project.tags.map((tag) => (_jsx("span", { className: "px-3 py-1 bg-[#403E43] rounded-full text-sm text-[#D3E4FD]", children: tag }, tag))) })] })] }, project.title))) })] }), _jsx("div", { className: "absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#1A1F2C] to-transparent" }), _jsx("div", { className: "absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#1A1F2C] to-transparent" })] }));
};
export default Projects;
