import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-90" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-accent-orange/20 rounded-full blur-xl animate-pulse delay-500" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-8 h-8 text-accent mr-3 animate-pulse" />
          <span className="text-lg font-medium bg-background/90 text-foreground px-4 py-2 rounded-full border border-border/50 backdrop-blur-sm">
            Powered by Advanced AI
          </span>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="text-white drop-shadow-lg">Welcome to</span>
          <br />
          <span className="bg-gradient-to-r from-white via-primary-light to-secondary-light bg-clip-text text-transparent drop-shadow-2xl">
            EduVerse AI
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Transform education with AI-powered tutoring, personalized career guidance, 
          and intelligent content generation for students and teachers
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={onGetStarted}
            className="group"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="heroSecondary" size="lg">
            Learn More
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-sm">AI-Powered Modules</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">10+</div>
            <div className="text-sm">Regional Languages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">∞</div>
            <div className="text-sm">Learning Possibilities</div>
          </div>
        </div>
      </div>
    </section>
  );
};