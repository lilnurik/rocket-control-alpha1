import React from 'react';
import { Card } from '@/components/ui/card';
import { Timer, Clock } from 'lucide-react';

const missionStages = [
  { id: 1, name: 'Pre-launch Checks', status: 'completed', time: 'T-02:00:00' },
  { id: 2, name: 'Fuel Loading', status: 'completed', time: 'T-01:30:00' },
  { id: 3, name: 'Engine Chill', status: 'in-progress', time: 'T-00:45:00' },
  { id: 4, name: 'Launch', status: 'pending', time: 'T-00:00:00' },
  { id: 5, name: 'Max-Q', status: 'pending', time: 'T+00:01:12' },
  { id: 6, name: 'MECO', status: 'pending', time: 'T+00:02:30' },
];

const MissionTimeline = () => {
  return (
    <Card className="military-panel">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-sm font-mono text-military-muted mb-1">MISSION TIMELINE</h3>
          <div className="flex items-center gap-2">
            <Timer className="w-4 h-4 text-military-accent" />
            <span className="text-2xl font-mono text-military-accent">T-00:45:00</span>
          </div>
        </div>
        <div className="text-right text-xs font-mono">
          <div className="text-military-muted">MISSION ID</div>
          <div className="text-military-accent">MSN-2024-03</div>
        </div>
      </div>

      <div className="space-y-4">
        {missionStages.map((stage, index) => (
          <div key={stage.id} className="relative">
            {index !== missionStages.length - 1 && (
              <div 
                className={`absolute left-[11px] top-6 w-0.5 h-full 
                  ${stage.status === 'completed' ? 'bg-military-accent' : 
                    stage.status === 'in-progress' ? 'bg-military-caution' : 
                    'bg-military-surface'}`}
              />
            )}
            <div className="flex items-start gap-4">
              <div 
                className={`w-6 h-6 rounded-full flex items-center justify-center mt-1
                  ${stage.status === 'completed' ? 'bg-military-accent' : 
                    stage.status === 'in-progress' ? 'bg-military-caution' : 
                    'bg-military-surface'}`}
              >
                <Clock className="w-3 h-3 text-military-background" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm text-military-text">{stage.name}</span>
                  <span className="font-mono text-xs text-military-muted">{stage.time}</span>
                </div>
                <div className="mt-1">
                  <div 
                    className={`h-1 rounded-full
                      ${stage.status === 'completed' ? 'bg-military-accent' : 
                        stage.status === 'in-progress' ? 'bg-military-caution' : 
                        'bg-military-surface'}`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MissionTimeline;