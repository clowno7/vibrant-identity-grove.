import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import { useState, useEffect } from 'react';

const Hero = () => {
  const navigate = useNavigate();
  const [textIndex, setTextIndex] = useState(0);
  const titles = [
    "Full Stack Developer",
    "Problem Solver",
    "Tech Enthusiast",
    "Space Explorer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleViewWork = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center max-w-3xl px-4">
        <div className="relative group">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold mb-4 bg-gradient-to-r from-[#E5DEFF] to-[#818CF8] bg-clip-text text-transparent relative z-10"
          >
            Giridhar Malagi
          </motion.h1>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 left-1/4 w-2 h-2 bg-[#818CF8] rounded-full animate-twinkle" />
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#E5DEFF] rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#0EA5E9] rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
            <motion.div
              className="absolute inset-0"
              initial={false}
              whileHover={{
                background: [
                  'radial-gradient(circle at 50% 50%, rgba(129, 140, 248, 0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 50% 50%, rgba(129, 140, 248, 0.2) 0%, transparent 70%)',
                ],
                transition: { duration: 1, repeat: Infinity }
              }}
            />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-[40px] mb-4"
        >
          {titles.map((title, index) => (
            <motion.p
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: textIndex === index ? 1 : 0,
                y: textIndex === index ? 0 : 20
              }}
              transition={{ duration: 0.5 }}
              className="text-2xl text-[#9F9EA1] absolute w-full left-0 right-0"
              style={{ 
                display: Math.abs(textIndex - index) <= 1 ? 'block' : 'none'
              }}
            >
              {title}
            </motion.p>
          ))}
          <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-[#0EA5E9]/10 to-[#818CF8]/10 blur-xl rounded-full transform -rotate-12 animate-pulse" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-[#9F9EA1] mb-8 leading-relaxed"
        >
          Exploring the digital universe through code. 
          Creating stellar web applications with modern technologies.
          Based in the Milky Way, Earth 🌍
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <Button
            onClick={handleViewWork}
            className="bg-gradient-to-r from-[#0EA5E9] to-[#818CF8] text-white px-8 py-6 rounded-full hover:shadow-lg transition-all transform hover:scale-105 hover:shadow-[#818CF8]/50 relative overflow-hidden group"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjIiLz48L3N2Zz4=')] bg-repeat opacity-0 group-hover:opacity-20 transition-opacity" />
          </Button>
          <Button
            variant="outline"
            className="px-8 py-6 rounded-full hover:shadow-lg transition-all transform hover:scale-105 border-[#818CF8] text-[#E5DEFF] hover:bg-[#818CF8]/10 relative overflow-hidden group"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="relative z-10">Contact Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#818CF8]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </Button>
        </motion.div>
        <SocialLinks />
      </div>
    </section>
  );
};

export default Hero;