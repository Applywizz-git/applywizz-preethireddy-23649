// import { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import AOS from 'aos';
// import { GraduationCap, Calendar } from 'lucide-react';

// const Education = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   const education = [
//     {
//       degree: 'Masters in Computer and Information System Security',
//       institution: 'Virginia University of Science & Technology',
//       period: 'January 2024 – October 2025',
//       icon: '🎓',
//     },
//     {
//       degree: 'Bachelor of Commerce',
//       institution: 'Ghanshyamdas Saraf College',
//       period: 'September 2017 – October 2020',
//       icon: '📚',
//     },
//   ];

//   return (
//     <section id="education" className="py-20 relative">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-heading mb-4">
//             Education & <span className="text-gradient">Learning</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
//         </motion.div>

//         <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
//           {education.map((item, index) => (
//             <motion.div
//               key={index}
//               data-aos="fade-up"
//               data-aos-delay={index * 200}
//               whileHover={{ y: -10, scale: 1.02 }}
//               className="relative glass rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all group overflow-hidden"
//             >
//               {/* Shimmer Effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

//                 </div>

//                 {/* Progress Indicator */}
//                 <div className="mt-6">
//                   <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       whileInView={{ width: index === 0 ? '70%' : '100%' }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 1, delay: 0.5 }}
//                       className="h-full bg-gradient-primary"
//                     />
//                   </div>
//                   <p className="text-xs text-muted-foreground mt-2">
//                     {index === 0 ? 'In Progress' : 'Completed'}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;























import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import { GraduationCap, School, Calendar } from 'lucide-react';

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const education = [
    {
      degree: 'Master of Science in AI & Computer Science',
      institution: 'Southern Illinois University Edwardsville',
      location: 'Edwardsville, IL',
      period: 'Graduate',
      icon: GraduationCap,
      color: 'hsl(var(--primary))',
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-background">
      {/* Abstract Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold tracking-[0.3em] uppercase text-sm mb-4 block">Foundations</span>
          <h2 className="text-5xl md:text-6xl font-heading mb-6 text-foreground">
            Academic <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-primary/20 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-10">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="group relative"
            >
              <div className="glass p-10 md:p-12 rounded-[3rem] border border-primary/5 hover:border-primary/20 transition-all duration-500 hover:shadow-3xl hover:shadow-primary/5 flex flex-col md:flex-row items-center gap-10">

                {/* Icon Container */}
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 rounded-[2rem] bg-primary/5 flex items-center justify-center relative z-10 group-hover:rotate-6 transition-transform duration-500">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700" />
                </div>

                {/* Content */}
                <div className="flex-grow text-center md:text-left space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h3 className="text-2xl md:text-3xl font-heading text-foreground group-hover:text-primary transition-colors">
                      {item.degree}
                    </h3>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-bold bg-primary/5 px-4 py-1 rounded-full text-sm">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </div>
                  </div>

                  <p className="text-xl text-muted-foreground font-light italic">
                    {item.institution}
                  </p>

                  <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground/60 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                    {item.location}
                  </div>
                </div>

                {/* Decorative Line (Desktop) */}
                <div className="hidden md:block absolute left-full ml-10 top-1/2 -translate-y-1/2 w-40 h-px bg-gradient-to-r from-primary/20 to-transparent group-even:left-auto group-even:right-full group-even:mr-10 group-even:bg-gradient-to-l" />
              </div>

              {/* Background Number */}
              <div className="absolute -top-10 -left-10 text-[10rem] font-bold text-primary/5 select-none pointer-events-none group-hover:text-primary/10 transition-colors duration-500">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
