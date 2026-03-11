import { motion } from 'framer-motion';
import { Layers, BarChart2, Users, ClipboardCheck } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '60+', label: 'Pipelines Automated' },
    { value: '45%', label: 'Deployment Speedup' },
  ];

  const highlights = [
    { icon: Layers, title: 'Cloud Engineering', description: 'Expertise in AWS and Azure cloud data platforms and distributed ETL/ELT pipelines.' },
    { icon: BarChart2, title: 'Lakehouse Architecture', description: 'Implementing Apache Iceberg and Medallion architectures for ACID transactions.' },
    { icon: Users, title: 'Orchestration', description: 'Developing workflows using Apache Airflow and Azure Data Factory at scale.' },
    { icon: ClipboardCheck, title: 'DevOps & DataOps', description: 'Standardizing infrastructure using Terraform, Docker, and CI/CD pipelines.' },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-accent font-heading font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Discovery</span>
          <h2 className="text-6xl md:text-7xl font-heading mb-6 text-foreground tracking-tighter">
            About <span className="text-accent italic">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-accent/20 mx-auto rounded-full relative overflow-hidden">
            <motion.div
              animate={{ x: [-100, 100] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-1/2 bg-accent rounded-full"
            />
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-premium rounded-[3rem] p-12 text-center group hover:scale-[1.02] transition-all"
            >
              <h3 className="text-7xl font-heading text-foreground mb-4 tracking-tighter group-hover:text-accent transition-colors">
                {stat.value}
              </h3>
              <p className="text-muted-foreground font-bold uppercase tracking-[0.2em] text-[10px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h3 className="text-4xl md:text-5xl font-heading text-foreground leading-tight tracking-tight">
              Designing Scalable Data <br />
              <span className="text-accent font-serif italic">Platforms and Pipelines.</span>
            </h3>
            <p className="text-2xl leading-relaxed text-muted-foreground font-light">
              Cloud Data Engineer with 5+ years of experience designing scalable 
              <span className="text-foreground font-medium"> AWS and Azure</span> cloud platforms and building distributed ETL pipelines.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-premium rounded-[2.5rem] p-8 group hover:border-accent/40 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 border border-accent/20 group-hover:rotate-12 transition-transform">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading mb-3 text-foreground tracking-tight">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
