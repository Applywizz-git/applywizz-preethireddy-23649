import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Binary, Cpu, Globe, Zap, LineChart, Cloud, Database } from 'lucide-react';

const Certifications = () => {
  const [flipped, setFlipped] = useState<number | null>(null);

  const certifications = [
    {
      title: 'AWS Certified Data Engineer',
      issuer: 'AWS - Associate (DEA-C01)',
      description: 'Validation of skills in data ingestion, transformation, and security on AWS.',
      icon: Cloud,
      link: 'https://www.credly.com/badges/b327637f-85b5-4f02-a8b9-e5921179d8bb/public_url',
    },
    {
      title: 'IBM Data Engineering',
      issuer: 'Coursera',
      description: 'Professional certificate covering data engineering fundamentals and hands-on projects.',
      icon: Database,
    },
    {
      title: 'Azure Data Engineer',
      issuer: 'Coursera',
      description: 'Professional certificate for designing and implementing data solutions on Azure.',
      icon: Zap,
    },
    {
      title: 'AWS Data Engineering & ML',
      issuer: 'Coursera',
      description: 'Foundational certification for data pipelines and machine learning on AWS.',
      icon: Cpu,
    },
    {
      title: 'DevOps on AWS Specialization',
      issuer: 'Coursera',
      description: 'Expertise in Infrastructure as Code and automated delivery pipelines.',
      icon: Globe,
    },
    {
      title: 'Data Warehousing for BI',
      issuer: 'Coursera',
      description: 'Specialization in data warehouse design and business intelligence analytics.',
      icon: LineChart,
    },
  ];

  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-accent font-heading font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Validation</span>
          <h2 className="text-6xl md:text-7xl font-heading mb-6 text-foreground tracking-tighter">
            Certifications
          </h2>
          <div className="w-24 h-1.5 bg-accent/20 mx-auto rounded-full relative overflow-hidden">
            <motion.div
              animate={{ x: [-100, 100] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-1/2 bg-accent rounded-full"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="relative h-80 cursor-pointer perspective-2000 group"
              onMouseEnter={() => setFlipped(index)}
              onMouseLeave={() => setFlipped(null)}
            >
              <motion.div
                animate={{ rotateY: flipped === index ? 180 : 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full preserve-3d"
              >
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden glass-premium rounded-[3rem] p-10 flex flex-col items-center justify-center text-center shadow-2xl overflow-hidden">
                  <div className="relative w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <cert.icon className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl mb-3 text-foreground leading-tight tracking-tight">
                    {cert.link ? (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                        {cert.title}
                      </a>
                    ) : cert.title}
                  </h3>
                  <p className="text-accent font-bold text-[10px] tracking-widest uppercase">{cert.issuer}</p>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 glass-premium border-accent/30 rounded-[3rem] p-10 flex flex-col justify-center overflow-hidden shadow-2xl">
                  <div className="relative z-10 text-center">
                    <h3 className="font-heading text-xl mb-4 text-accent tracking-tight">
                      {cert.link ? (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {cert.title}
                        </a>
                      ) : cert.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .perspective-2000 { perspective: 2000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </section>
  );
};

export default Certifications;
