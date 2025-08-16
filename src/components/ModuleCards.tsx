import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, TrendingUp, FileText, ArrowRight } from "lucide-react";
import aiTutorImage from "@/assets/ai-tutor.jpg";
import careerGuidanceImage from "@/assets/career-guidance.jpg";
import contentGeneratorImage from "@/assets/content-generator.jpg";

interface ModuleCardsProps {
  userMode: 'student' | 'teacher';
  onModuleSelect: (module: string) => void;
}

export const ModuleCards = ({ userMode, onModuleSelect }: ModuleCardsProps) => {
  const studentModules = [
    {
      id: 'ai-tutor',
      title: 'AI Tutor (EduLingua)',
      description: 'Get concepts explained in simple terms with support for Indian regional languages',
      icon: MessageCircle,
      image: aiTutorImage,
      features: ['Multi-language support', 'Voice explanations', 'Interactive Q&A'],
      gradient: 'var(--gradient-primary)'
    },
    {
      id: 'career-guidance',
      title: 'Career Guidance (PathFinder)',
      description: 'Receive personalized career and learning path recommendations based on your profile',
      icon: TrendingUp,
      image: careerGuidanceImage,
      features: ['Profile analysis', 'Career mapping', 'Learning paths'],
      gradient: 'var(--gradient-secondary)'
    }
  ];

  const teacherModules = [
    {
      id: 'content-generator',
      title: 'Content Generator (TeachMate)',
      description: 'Auto-generate lesson plans, quizzes, and simplified notes for any topic',
      icon: FileText,
      image: contentGeneratorImage,
      features: ['Lesson plans', 'Quiz generation', 'Simplified notes'],
      gradient: 'var(--gradient-accent)'
    }
  ];

  const modules = userMode === 'student' ? studentModules : teacherModules;

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {userMode === 'student' ? 'Student Tools' : 'Teacher Tools'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {userMode === 'student' 
              ? 'Enhance your learning experience with AI-powered educational tools'
              : 'Create engaging educational content with intelligent AI assistance'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => {
            const IconComponent = module.icon;
            return (
              <Card 
                key={module.id}
                className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 cursor-pointer border-2 hover:border-primary/30 overflow-hidden bg-[image:var(--gradient-card)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={module.image} 
                    alt={module.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {module.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-6">
                    {module.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="primary" 
                    className="w-full group-hover:scale-105 transition-transform"
                    onClick={() => onModuleSelect(module.id)}
                  >
                    Launch {module.title.split(' ')[0]}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {userMode === 'student' && (
          <div className="mt-12 text-center">
            <Card className="inline-block p-6 bg-[image:var(--gradient-accent)] text-white">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">Need Teaching Tools?</h3>
                <p className="text-white/90 mb-4">Switch to Teacher mode to access content generation tools</p>
                <Button variant="heroSecondary" size="sm">
                  Switch to Teacher Mode
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};