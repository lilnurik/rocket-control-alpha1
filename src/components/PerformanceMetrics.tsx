import React from 'react';
import { Card } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Gauge, Rocket, Wind } from 'lucide-react';

const mockData = {
  velocity: Array.from({ length: 20 }, (_, i) => ({
    time: i,
    value: 100 + Math.sin(i * 0.5) * 20 + Math.random() * 10
  })),
  altitude: Array.from({ length: 20 }, (_, i) => ({
    time: i,
    value: 50 + i * 10 + Math.random() * 5
  })),
  thrust: Array.from({ length: 20 }, (_, i) => ({
    time: i,
    value: 90 + Math.cos(i * 0.3) * 10 + Math.random() * 5
  }))
};

const PerformanceMetrics = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card className="military-panel col-span-2">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-sm font-mono text-military-muted mb-1">VELOCITY METRICS</h3>
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4 text-military-accent" />
              <span className="text-2xl font-mono text-military-accent">
                {mockData.velocity[mockData.velocity.length - 1].value.toFixed(1)} m/s
              </span>
            </div>
          </div>
          <div className="text-right text-xs font-mono">
            <div className="text-military-muted">SENSOR ID</div>
            <div className="text-military-accent">VEL-889.223</div>
          </div>
        </div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData.velocity}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 102, 0.1)" />
              <XAxis dataKey="time" stroke="#94A3B8" />
              <YAxis stroke="#94A3B8" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1A1F2C',
                  border: '1px solid rgba(0, 255, 102, 0.2)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#00FF66" 
                dot={false}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="military-panel">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-sm font-mono text-military-muted mb-1">ALTITUDE</h3>
            <div className="flex items-center gap-2">
              <Wind className="w-4 h-4 text-military-caution" />
              <span className="text-2xl font-mono text-military-caution">
                {mockData.altitude[mockData.altitude.length - 1].value.toFixed(1)} km
              </span>
            </div>
          </div>
          <div className="text-right text-xs font-mono">
            <div className="text-military-muted">SENSOR ID</div>
            <div className="text-military-caution">ALT-445.778</div>
          </div>
        </div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData.altitude}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 157, 0, 0.1)" />
              <XAxis dataKey="time" stroke="#94A3B8" />
              <YAxis stroke="#94A3B8" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1A1F2C',
                  border: '1px solid rgba(255, 157, 0, 0.2)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#FF9D00" 
                dot={false}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="military-panel">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-sm font-mono text-military-muted mb-1">ENGINE THRUST</h3>
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-military-warning" />
              <span className="text-2xl font-mono text-military-warning">
                {mockData.thrust[mockData.thrust.length - 1].value.toFixed(1)}%
              </span>
            </div>
          </div>
          <div className="text-right text-xs font-mono">
            <div className="text-military-muted">ENGINE ID</div>
            <div className="text-military-warning">ENG-112.445</div>
          </div>
        </div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData.thrust}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 59, 20, 0.1)" />
              <XAxis dataKey="time" stroke="#94A3B8" />
              <YAxis stroke="#94A3B8" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1A1F2C',
                  border: '1px solid rgba(255, 59, 20, 0.2)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#FF3B14" 
                dot={false}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default PerformanceMetrics;