import { useEffect, useRef } from 'react';
import { CheckCircle2, GraduationCap, Rocket, Target } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `${index * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const highlights = [
    'Modern responsive design principles',
    'Advanced CSS animations and transitions',
    'JavaScript scroll detection and interactivity',
    'Professional code structure and organization',
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute -right-64 top-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -left-64 bottom-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Visual */}
          <div className="animate-on-scroll relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-border/50 animate-pulse" />
              <div className="absolute inset-8 rounded-full border border-primary/20" />
              <div className="absolute inset-16 rounded-full border border-secondary/20" />
              
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl glass-card flex items-center justify-center glow pulse-glow">
                  <GraduationCap className="w-16 h-16 text-primary" />
                </div>
              </div>

              {/* Floating icons */}
              <div className="absolute top-8 right-8 w-16 h-16 rounded-xl glass-card flex items-center justify-center float">
                <Rocket className="w-8 h-8 text-secondary" />
              </div>
              <div className="absolute bottom-8 left-8 w-16 h-16 rounded-xl glass-card flex items-center justify-center float" style={{ animationDelay: '-2s' }}>
                <Target className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:pl-8">
            <span className="animate-on-scroll inline-block text-primary font-semibold mb-4 tracking-wider uppercase text-sm">
              About This Project
            </span>
            <h2 className="animate-on-scroll text-4xl md:text-5xl font-bold mb-6">
              SkillCraft Technology
              <span className="gradient-text"> Internship</span>
            </h2>
            <p className="animate-on-scroll text-muted-foreground text-lg mb-8 leading-relaxed">
              This landing page was crafted as part of the SkillCraft Technology internship program, 
              demonstrating proficiency in modern web development practices including responsive design, 
              CSS animations, and JavaScript interactivity.
            </p>

            {/* Highlights */}
            <ul className="space-y-4 mb-10">
              {highlights.map((item, index) => (
                <li
                  key={index}
                  className="animate-on-scroll flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>

            {/* Stats row */}
            <div className="animate-on-scroll grid grid-cols-3 gap-6">
              {[
                { value: '5+', label: 'Sections' },
                { value: '10+', label: 'Animations' },
                { value: '100%', label: 'Mobile Ready' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl glass-card text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
