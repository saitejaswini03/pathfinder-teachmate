import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users } from "lucide-react";

interface ModeSelectionProps {
  onModeSelect: (mode: 'student' | 'teacher') => void;
}

export const ModeSelection = ({ onModeSelect }: ModeSelectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-[image:var(--gradient-card)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Choose Your Path
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Select your role to access personalized AI-powered educational tools
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="group hover:shadow-[var(--shadow-glow)] transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 bg-[image:var(--gradient-card)]">
            <CardHeader className="text-center pb-6">
              <div className="w-24 h-24 mx-auto mb-6 bg-[image:var(--gradient-primary)] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
              <CardTitle className="text-2xl mb-3">Student Mode</CardTitle>
              <CardDescription className="text-base">
                Access AI tutoring, career guidance, and personalized learning experiences
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-3 mb-8 text-sm text-muted-foreground">
                <div>• AI Tutor with regional language support</div>
                <div>• Personalized career recommendations</div>
                <div>• Interactive learning assistance</div>
              </div>
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => onModeSelect('student')}
                className="w-full"
              >
                Continue as Student
              </Button>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-[var(--shadow-glow)] transition-all duration-300 cursor-pointer border-2 hover:border-secondary/50 bg-[image:var(--gradient-card)]">
            <CardHeader className="text-center pb-6">
              <div className="w-24 h-24 mx-auto mb-6 bg-[image:var(--gradient-secondary)] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-12 h-12 text-white" />
              </div>
              <CardTitle className="text-2xl mb-3">Teacher Mode</CardTitle>
              <CardDescription className="text-base">
                Generate lesson plans, quizzes, and educational content with AI assistance
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-3 mb-8 text-sm text-muted-foreground">
                <div>• AI-powered lesson plan generation</div>
                <div>• Automatic quiz and test creation</div>
                <div>• Simplified content explanations</div>
              </div>
              <Button 
                variant="secondary" 
                size="lg" 
                onClick={() => onModeSelect('teacher')}
                className="w-full"
              >
                Continue as Teacher
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};