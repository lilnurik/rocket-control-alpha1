import React from 'react';
import { Card } from '@/components/ui/card';
import { Shield, Radio, AlertTriangle, Wifi } from 'lucide-react';

const DefenseMonitoring = () => {
  return (
    <Card className="military-panel">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-sm font-mono text-military-muted mb-1">DEFENSE SYSTEMS</h3>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-military-accent" />
            <span className="text-2xl font-mono text-military-accent">ACTIVE</span>
          </div>
        </div>
        <div className="text-right text-xs font-mono">
          <div className="text-military-muted">DEFENSE ID</div>
          <div className="text-military-accent">DEF-112.445</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-military-accent" />
            <span className="text-sm text-military-muted">ECM Status</span>
          </div>
          <div className="font-mono text-military-accent">ACTIVE</div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-military-warning" />
            <span className="text-sm text-military-muted">Threats</span>
          </div>
          <div className="font-mono text-military-warning">2 DETECTED</div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4 text-military-caution" />
            <span className="text-sm text-military-muted">Signal Strength</span>
          </div>
          <div className="font-mono text-military-caution">87%</div>
        </div>

        <div className="space-y-2">
          <div className="text-sm text-military-muted">Countermeasures</div>
          <div className="font-mono text-military-accent">READY</div>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="text-sm text-military-muted mb-2">Defense Grid Status</div>
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full ${
                i < 6 ? 'bg-military-accent' : 'bg-military-surface'
              }`}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default DefenseMonitoring;