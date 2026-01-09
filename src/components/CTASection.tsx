import { useEffect, useRef } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
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

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="relative max-w-4xl mx-auto">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-3xl opacity-50" />
          
          {/* Card */}
          <div className="relative p-12 md:p-16 rounded-3xl glass-card text-center overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-3xl gradient-border" />
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <span className="animate-on-scroll inline-block text-primary font-semibold mb-4 tracking-wider uppercase text-sm">
                Get In Touch
              </span>
              <h2 className="animate-on-scroll text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Your
                <span className="gradient-text"> Journey?</span>
              </h2>
              <p className="animate-on-scroll text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
                Whether you're interested in collaborating or want to learn more about this project, 
                I'd love to hear from you. Let's build something amazing together.
              </p>

              {/* CTA Buttons */}
              <div className="animate-on-scroll flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" className="group">
                  <Mail className="w-5 h-5" />
                  Contact Me
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button variant="glass" size="xl">
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
