import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Certifications from '@/components/Certifications';
const Index = () => {
    return (_jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 }, className: "min-h-screen", children: [_jsx(ParticleBackground, {}), _jsx(Hero, {}), _jsx(Skills, {}), _jsx(Projects, {}), _jsx(Certifications, {}), _jsx(Contact, {})] }));
};
export default Index;
