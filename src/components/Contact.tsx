import { motion } from 'framer-motion';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from './ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent to the Stars! 🌟",
      description: "Your message is traveling through space. I'll respond soon!",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-[#1A1F2C]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-[#E5DEFF]"
        >
          Send a Signal to Space
        </motion.h2>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-6"
        >
          <motion.div whileHover={{ scale: 1.02 }}>
            <label htmlFor="name" className="block text-sm font-medium text-[#D3E4FD] mb-1">
              Your Name (Earth Identity)
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-2 bg-[#403E43] border border-[#8B5CF6] rounded-md 
                       text-[#E5DEFF] focus:ring-2 focus:ring-[#1EAEDB] focus:border-transparent 
                       transition-all placeholder-[#9F9EA1]"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <label htmlFor="email" className="block text-sm font-medium text-[#D3E4FD] mb-1">
              Space Mail (Email)
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-2 bg-[#403E43] border border-[#8B5CF6] rounded-md 
                       text-[#E5DEFF] focus:ring-2 focus:ring-[#1EAEDB] focus:border-transparent 
                       transition-all placeholder-[#9F9EA1]"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <label htmlFor="message" className="block text-sm font-medium text-[#D3E4FD] mb-1">
              Your Message to the Stars
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
              className="w-full px-4 py-2 bg-[#403E43] border border-[#8B5CF6] rounded-md 
                       text-[#E5DEFF] focus:ring-2 focus:ring-[#1EAEDB] focus:border-transparent 
                       transition-all placeholder-[#9F9EA1]"
            />
          </motion.div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#1EAEDB] to-[#8B5CF6] text-white py-3 
                     rounded-md hover:shadow-lg transition-all transform hover:scale-105 
                     hover:shadow-[#8B5CF6]/50 disabled:opacity-50"
          >
            {isSubmitting ? "Transmitting... 🛸" : "Launch Message 🚀"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;