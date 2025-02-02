import { motion } from 'framer-motion';

const skills = [
  { name: 'React.js', level: 90, color: 'from-[#61DAFB] to-[#2A6B7C]', icon: '⚛️', description: 'Frontend Development' },
  { name: 'Python', level: 85, color: 'from-[#3776AB] to-[#FFD43B]', icon: '🐍', description: 'Backend & Data Science' },
  { name: 'Django', level: 88, color: 'from-[#092E20] to-[#44B78B]', icon: '🎯', description: 'Web Framework' },
  { name: 'Node.js', level: 82, color: 'from-[#339933] to-[#1A4D1A]', icon: '🚀', description: 'Backend Development' },
  { name: 'C++', level: 85, color: 'from-[#00599C] to-[#004482]', icon: '⚡', description: 'Systems Programming' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#1A1F2C] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-[#E5DEFF]"
        >
          Technical Expertise
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <motion.div 
                className="flex items-center bg-[#2A2F3C] p-6 rounded-lg relative group cursor-pointer"
                whileHover={{
                  scale: 1.02,
                  translateX: 10,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.span 
                      className="text-2xl"
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.2
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.icon}
                    </motion.span>
                    <div>
                      <motion.h3 
                        className="font-semibold text-xl text-[#E5DEFF] group-hover:text-white transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill.name}
                      </motion.h3>
                      <p className="text-sm text-[#9F9EA1] group-hover:text-[#B8B7BA] transition-colors">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                  <div className="h-2 bg-[#403E43] rounded-full overflow-hidden mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} relative group`}
                    >
                      <motion.div 
                        className="absolute top-0 left-0 w-full h-full"
                        whileHover={{
                          opacity: [0, 1, 0],
                          x: ['0%', '100%'],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
                <motion.div 
                  className="ml-4 flex items-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-[#E5DEFF] font-mono text-lg tabular-nums">
                    {skill.level}%
                  </span>
                </motion.div>
              </motion.div>
              
              {/* Subtle glow effect on hover */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity"
                initial={false}
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background stars effect */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white/30 rounded-full animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </section>
  );
};

export default Skills;