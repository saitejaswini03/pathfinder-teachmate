import React, { useState } from 'react';
import { Hero } from "@/components/Hero";
import { ModeSelection } from "@/components/ModeSelection";
import { ModuleCards } from "@/components/ModuleCards";
import { ModuleInterface } from "@/components/ModuleInterface";
import { Toaster } from "@/components/ui/toaster";

type AppState = 'landing' | 'mode-selection' | 'modules' | 'module-interface';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('landing');
  const [userMode, setUserMode] = useState<'student' | 'teacher' | null>(null);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  const handleGetStarted = () => {
    setCurrentState('mode-selection');
  };

  const handleModeSelect = (mode: 'student' | 'teacher') => {
    setUserMode(mode);
    setCurrentState('modules');
  };

  const handleModuleSelect = (module: string) => {
    setSelectedModule(module);
    setCurrentState('module-interface');
  };

  const handleBack = () => {
    if (currentState === 'module-interface') {
      setCurrentState('modules');
      setSelectedModule(null);
    } else if (currentState === 'modules') {
      setCurrentState('mode-selection');
      setUserMode(null);
    } else if (currentState === 'mode-selection') {
      setCurrentState('landing');
    }
  };

  return (
    <div className="min-h-screen">
      {currentState === 'landing' && (
        <Hero onGetStarted={handleGetStarted} />
      )}
      
      {currentState === 'mode-selection' && (
        <ModeSelection onModeSelect={handleModeSelect} />
      )}
      
      {currentState === 'modules' && userMode && (
        <ModuleCards 
          userMode={userMode} 
          onModuleSelect={handleModuleSelect}
        />
      )}
      
      {currentState === 'module-interface' && selectedModule && (
        <ModuleInterface 
          module={selectedModule}
          onBack={handleBack}
        />
      )}
      
      <Toaster />
    </div>
  );
};

export default Index;
