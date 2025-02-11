import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '@/components/ui/card';
import { ArrowUp, ArrowDown, Thermometer, Gauge } from 'lucide-react';

const mockData = {
  temperature: Array.from({ length: 20 }, (_, i) => ({
    time: i,
    value: 20 + Math.random() * 10
  })),
  pressure: Array.from({ length: 20 }, (_, i) => ({
    time: i,
    value: 100 + Math.random() * 20
  }))
};

const DataFeeds = () => {
  const currentTemp = mockData.temperature[mockData.temperature.length - 1].value.toFixed(1);
  const tempDelta = (mockData.temperature[mockData.temperature.length - 1].value - 
                     mockData.temperature[mockData.temperature.length - 2].value).toFixed(1);
  
  const currentPressure = mockData.pressure[mockData.pressure.length - 1].value.toFixed(1);
  const pressureDelta = (mockData.pressure[mockData.pressure.length - 1].value - 
                         mockData.pressure[mockData.pressure.length - 2].value).toFixed(1);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card className="military-panel">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-sm font-mono text-military-muted mb-1">TEMPERATURE STATUS</h3>
            <div className="flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-military-accent" />
              <span className="text-2xl font-mono text-military-accent">{currentTemp}°C</span>
              <span className={`text-sm font-mono ${Number(tempDelta) >= 0 ? 'text-military-caution' : 'text-military-warning'}`}>
                {Number(tempDelta) >= 0 ? <ArrowUp className="w-3 h-3 inline" /> : <ArrowDown className="w-3 h-3 inline" />}
                {Math.abs(Number(tempDelta))}°C
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-2 text-xs font-mono">
              <div>
                <div className="text-military-muted">MAX TEMP</div>
                <div className="text-military-text">32.5°C</div>
              </div>
              <div>
                <div className="text-military-muted">MIN TEMP</div>
                <div className="text-military-text">18.2°C</div>
              </div>
            </div>
          </div>
          <div className="text-right text-xs font-mono">
            <div className="text-military-muted">SENSOR ID</div>
            <div className="text-military-accent">TMP-242.331</div>
          </div>
        </div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData.temperature}>
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
            <h3 className="text-sm font-mono text-military-muted mb-1">PRESSURE READINGS</h3>
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-military-caution" />
              <span className="text-2xl font-mono text-military-caution">{currentPressure} kPa</span>
              <span className={`text-sm font-mono ${Number(pressureDelta) >= 0 ? 'text-military-caution' : 'text-military-warning'}`}>
                {Number(pressureDelta) >= 0 ? <ArrowUp className="w-3 h-3 inline" /> : <ArrowDown className="w-3 h-3 inline" />}
                {Math.abs(Number(pressureDelta))} kPa
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-2 text-xs font-mono">
              <div>
                <div className="text-military-muted">NOMINAL</div>
                <div className="text-military-text">100.0 kPa</div>
              </div>
              <div>
                <div className="text-military-muted">THRESHOLD</div>
                <div className="text-military-warning">125.0 kPa</div>
              </div>
            </div>
          </div>
          <div className="text-right text-xs font-mono">
            <div className="text-military-muted">SENSOR ID</div>
            <div className="text-military-caution">PRS-556.892</div>
          </div>
        </div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData.pressure}>
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
    </div>
  );
};

export default DataFeeds;