import React from 'react';
import { Card } from '@/components/ui/card';
import { Bomb, Lock, AlertTriangle, Power } from 'lucide-react';

const PayloadStatus = () => {
  return (
    <Card className="military-panel">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-sm font-mono text-military-muted mb-1">PAYLOAD STATUS</h3>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-military-warning" />
            <span className="text-2xl font-mono text-military-warning">ARMED</span>
          </div>
        </div>
        <div className="text-right text-xs font-mono">
          <div className="text-military-muted">WARHEAD ID</div>
          <div className="text-military-warning">WH-445.778</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Bomb className="w-4 h-4 text-military-warning" />
            <span className="text-sm text-military-muted">Payload Type</span>
          </div>
          <div className="font-mono text-military-warning">CONVENTIONAL</div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-military-caution" />
            <span className="text-sm text-military-muted">Safety Status</span>
          </div>
          <div className="font-mono text-military-caution">STAGE 2/3</div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Power className="w-4 h-4 text-military-accent" />
            <span className="text-sm text-military-muted">Power Level</span>
          </div>
          <div className="font-mono text-military-accent">98%</div>
        </div>

        <div className="space-y-2">
          <div className="text-sm text-military-muted">Detonation Mode</div>
          <div className="font-mono text-military-accent">IMPACT</div>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="text-sm text-military-muted mb-2">Arming Sequence</div>
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full ${
                i < 4 ? 'bg-military-warning' : 'bg-military-surface'
              }`}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default PayloadStatus;