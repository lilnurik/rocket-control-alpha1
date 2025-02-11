import React from 'react';
import { Card } from '@/components/ui/card';
import { Target, Crosshair, Shield, AlertTriangle } from 'lucide-react';

const TargetingSystem = () => {
  return (
    <Card className="military-panel">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-sm font-mono text-military-muted mb-1">TARGETING SYSTEM</h3>
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-military-warning animate-pulse" />
            <span className="text-2xl font-mono text-military-warning">ACTIVE</span>
          </div>
        </div>
        <div className="text-right text-xs font-mono">
          <div className="text-military-muted">TARGET ID</div>
          <div className="text-military-warning">TGT-445.778</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="text-sm text-military-muted">Impact Coordinates</div>
          <div className="font-mono text-military-accent">
            LAT: 35°41'22"N
            <br />
            LON: 139°41'30"E
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="text-sm text-military-muted">CEP (Accuracy)</div>
          <div className="font-mono text-military-accent">3.5m</div>
        </div>

        <div className="space-y-2">
          <div className="text-sm text-military-muted">Blast Radius</div>
          <div className="font-mono text-military-warning">2.5 KM</div>
        </div>

        <div className="space-y-2">
          <div className="text-sm text-military-muted">Time to Impact</div>
          <div className="font-mono text-military-caution">00:03:45</div>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex justify-between items-center text-sm">
          <span className="text-military-muted">Threat Level</span>
          <span className="text-military-warning">ELEVATED</span>
        </div>
        <div className="h-2 bg-military-surface rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-military-warning" />
        </div>
      </div>
    </Card>
  );
};

export default TargetingSystem;