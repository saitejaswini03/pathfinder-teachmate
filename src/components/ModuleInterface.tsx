import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mic, Volume2, Send, Download, Copy } from "lucide-react";
import { useState } from "react";

interface ModuleInterfaceProps {
  module: string;
  onBack: () => void;
}

export const ModuleInterface = ({ module, onBack }: ModuleInterfaceProps) => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getModuleConfig = () => {
    switch (module) {
      case 'ai-tutor':
        return {
          title: 'AI Tutor (EduLingua)',
          description: 'Ask any question and get explanations in simple terms',
          placeholder: 'Ask me to explain any concept... (e.g., "Explain photosynthesis in Hindi")',
          features: ['Multi-language support', 'Voice explanations', 'Text-to-speech'],
          color: 'primary'
        };
      case 'career-guidance':
        return {
          title: 'Career Guidance (PathFinder)',
          description: 'Get personalized career recommendations',
          placeholder: 'Tell me about your interests, class, and academic performance...',
          features: ['Profile analysis', 'Career mapping', 'Learning paths'],
          color: 'secondary'
        };
      case 'content-generator':
        return {
          title: 'Content Generator (TeachMate)',
          description: 'Generate educational content automatically',
          placeholder: 'What would you like me to create? (e.g., "Create a lesson plan for 5th grade math on fractions")',
          features: ['Lesson plans', 'Quiz generation', 'Simplified notes'],
          color: 'accent'
        };
      default:
        return {
          title: 'Module',
          description: 'AI-powered educational tool',
          placeholder: 'Enter your request...',
          features: [],
          color: 'primary'
        };
    }
  };

  const config = getModuleConfig();

  const handleSubmit = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" onClick={onBack} className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{config.title}</h1>
              <p className="text-muted-foreground">{config.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Interface */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Start Your Session</CardTitle>
                <CardDescription>
                  {module === 'ai-tutor' && 'Ask questions and get instant explanations with voice support'}
                  {module === 'career-guidance' && 'Share your profile details for personalized recommendations'}
                  {module === 'content-generator' && 'Describe what educational content you need'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={config.placeholder}
                    className="w-full h-32 p-4 border border-input rounded-md resize-none focus:ring-2 focus:ring-ring focus:outline-none"
                  />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {module === 'ai-tutor' && (
                        <>
                          <Button variant="outline" size="sm">
                            <Mic className="w-4 h-4 mr-2" />
                            Voice Input
                          </Button>
                          <Button variant="outline" size="sm">
                            <Volume2 className="w-4 h-4 mr-2" />
                            Listen
                          </Button>
                        </>
                      )}
                      {module === 'content-generator' && (
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Export
                        </Button>
                      )}
                    </div>
                    
                    <Button 
                      variant={config.color as any} 
                      onClick={handleSubmit}
                      disabled={isLoading || !input.trim()}
                    >
                      {isLoading ? 'Processing...' : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          {module === 'career-guidance' ? 'Analyze Profile' : 'Generate'}
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results Area */}
            <Card>
              <CardHeader>
                <CardTitle>Results</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    <span className="ml-3 text-muted-foreground">AI is working on your request...</span>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <p>Your AI-generated content will appear here.</p>
                    <p className="text-sm mt-2">Enter your request above to get started!</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {config.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {module === 'ai-tutor' && (
                  <>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      Explain in Hindi
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      Simplify for Grade 5
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      Give Examples
                    </Button>
                  </>
                )}
                {module === 'career-guidance' && (
                  <>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      Science Stream
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      Arts Stream
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      Commerce Stream
                    </Button>
                  </>
                )}
                {module === 'content-generator' && (
                  <>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      Create Quiz
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      Lesson Plan
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      Study Notes
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>

            <Card className="bg-[image:var(--gradient-card)]">
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Check our guides and examples
                </p>
                <Button variant="outline" size="sm">
                  View Documentation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};