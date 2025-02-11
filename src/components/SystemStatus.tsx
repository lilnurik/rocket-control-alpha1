import React from 'react';
import { Card } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';
import { Shield, Fuel, AlertTriangle } from 'lucide-react';

const systemData = [
  { name: 'Operational', value: 70 },
  { name: 'Warning', value: 20 },
  { name: 'Critical', value: 10 },
];

const COLORS = ['#00FF66', '#FF9D00', '#FF3B14'];

const fuelData = [
  {
    name: 'Fuel Level',
    value: 85,
    fill: '#00FF66',
  },
];

const SystemStatus = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card className="military-panel">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-sm font-mono text-military-muted mb-1">SYSTEM HEALTH</h3>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-military-accent" />
              <span className="text-xl font-mono text-military-accent">70% OPERATIONAL</span>
            </div>
          </div>
          <div className="text-right text-xs font-mono">
            <div className="text-military-muted">STATUS CODE</div>
            <div className="text-military-accent">SYS-775.441</div>
          </div>
        </div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={systemData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {systemData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4 text-xs font-mono">
          {systemData.map((item, index) => (
            <div key={item.name} className="text-center">
              <div className="text-military-muted">{item.name.toUpperCase()}</div>
              <div className="text-military-text">{item.value}%</div>
              <div className="h-1 w-full mt-1 rounded-full" style={{ backgroundColor: COLORS[index] }} />
            </div>
          ))}
        </div>
      </Card>

      <Card className="military-panel">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-sm font-mono text-military-muted mb-1">FUEL STATUS</h3>
            <div className="flex items-center gap-2">
              <Fuel className="w-4 h-4 text-military-accent" />
              <span className="text-xl font-mono text-military-accent">85% REMAINING</span>
            </div>
          </div>
          <div className="text-right text-xs font-mono">
            <div className="text-military-muted">TANK ID</div>
            <div className="text-military-accent">FTK-332.118</div>
          </div>
        </div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart 
              cx="50%" 
              cy="50%" 
              innerRadius="60%" 
              outerRadius="80%" 
              barSize={10} 
              data={fuelData}
              startAngle={180}
              endAngle={-180}
            >
              <RadialBar
                background
                dataKey="value"
                cornerRadius={30}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 text-xs font-mono">
          <div>
            <div className="text-military-muted">CONSUMPTION RATE</div>
            <div className="text-military-text">2.3 L/min</div>
          </div>
          <div>
            <div className="text-military-muted">EST. REMAINING</div>
            <div className="text-military-text">4h 12m</div>
          </div>
          <div>
            <div className="text-military-muted">PRESSURE</div>
            <div className="text-military-text">2.8 MPa</div>
          </div>
          <div>
            <div className="text-military-muted">TEMPERATURE</div>
            <div className="text-military-text">-182°C</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SystemStatus;