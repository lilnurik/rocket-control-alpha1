import React from 'react';
import RocketVisualization from '@/components/RocketVisualization';
import MissionControl from '@/components/MissionControl';
import PerformanceMetrics from '@/components/PerformanceMetrics';
import MissionTimeline from '@/components/MissionTimeline';
import TargetingSystem from '@/components/TargetingSystem';
import DefenseMonitoring from '@/components/DefenseMonitoring';
import PayloadStatus from '@/components/PayloadStatus';

const Index = () => {
  return (
    <div className="min-h-screen military-grid">
      <header className="flex justify-between items-center p-4 border-b border-military-accent/20">
        <h1 className="text-2xl font-bold military-text-glow tracking-wider">
          BALLISTIC MISSILE CONTROL CENTER
        </h1>
        <div className="text-military-muted tracking-widest">
          CLASSIFIED // TOP SECRET
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="military-panel min-h-[400px]">
            <RocketVisualization />
          </div>
          <PerformanceMetrics />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TargetingSystem />
            <DefenseMonitoring />
          </div>
        </div>
        
        <div className="space-y-6">
          <MissionControl />
          <PayloadStatus />
          <MissionTimeline />
        </div>
      </main>
    </div>
  );
};

export default Index;