import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

const certifications = [
  {
    title: "React Development",
    issuer: "Cosmic Code Academy",
    date: "2024",
    icon: <Award className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    description: "Advanced React patterns and state management",
    badge: "Elite Developer"
  },
  {
    title: "TypeScript Mastery",
    issuer: "Stellar Learning",
    date: "2023",
    icon: <Star className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "Advanced TypeScript and design patterns",
    badge: "TypeScript Expert"
  },
  {
    title: "Full Stack Development",
    issuer: "Galaxy Institute",
    date: "2023",
    icon: <Award className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "Complete web development bootcamp",
    badge: "Full Stack Developer"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-[#1A1F2C] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-[#E5DEFF]"
        >
          Cosmic Achievements
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <HoverCard>
                <HoverCardTrigger>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-[#2A2F3C] rounded-lg overflow-hidden border border-[#8B5CF6]/20 cursor-pointer"
                  >
                    <div className="relative h-48">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1F2C]/80" />
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-[#8B5CF6] p-2 rounded-full">
                        {cert.icon}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-[#E5DEFF]">{cert.title}</h3>
                      <p className="text-[#9F9EA1] text-sm mb-2">{cert.issuer}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#D3E4FD] text-sm">{cert.date}</span>
                        <span className="px-3 py-1 bg-[#403E43] rounded-full text-xs text-[#D3E4FD]">
                          {cert.badge}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-[#2A2F3C] border border-[#8B5CF6]/20">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-[#E5DEFF]">{cert.title}</h4>
                    <p className="text-sm text-[#9F9EA1]">{cert.description}</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-white rounded-full animate-twinkle" />
      <div className="absolute bottom-10 left-10 w-2 h-2 bg-white rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-twinkle" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default Certifications;