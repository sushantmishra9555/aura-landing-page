import { useEffect, useRef } from 'react';
import { Layers, Zap, Shield, Palette, Smartphone, Code2 } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Glassmorphism Design',
    description: 'Modern frosted glass effects with subtle transparency and blur for a premium aesthetic.',
  },
  {
    icon: Zap,
    title: 'Smooth Animations',
    description: 'Butter-smooth CSS transitions and JavaScript-powered scroll animations at 60fps.',
  },
  {
    icon: Shield,
    title: 'Accessible & Semantic',
    description: 'Built with accessibility in mind using proper ARIA labels and semantic HTML structure.',
  },
  {
    icon: Palette,
    title: 'Dark Theme',
    description: 'Eye-friendly dark color palette with vibrant gradient accents for visual impact.',
  },
  {
    icon: Smartphone,
    title: 'Fully Responsive',
    description: 'Optimized layouts for mobile, tablet, and desktop with touch-friendly interactions.',
  },
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Well-structured, modular, and maintainable code following best practices.',
  },
];

const FeaturesSection = () => {
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
      id="features"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="animate-on-scroll inline-block text-primary font-semibold mb-4 tracking-wider uppercase text-sm">
            Features
          </span>
          <h2 className="animate-on-scroll text-4xl md:text-5xl font-bold mb-6">
            What Makes This
            <span className="gradient-text"> Stand Out</span>
          </h2>
          <p className="animate-on-scroll text-muted-foreground text-lg">
            Crafted with attention to detail, this landing page demonstrates professional-grade web development techniques.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-on-scroll group relative p-8 rounded-2xl glass-card hover:bg-muted/20 transition-all duration-500"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 gradient-border" />
              
              {/* Icon */}
              <div className="relative mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-500">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-semibold mb-3 group-hover:text-foreground transition-colors">
                {feature.title}
              </h3>
              <p className="relative text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
