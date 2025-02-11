import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Shield, AlertTriangle, Power } from "lucide-react";

const MissionControl = () => {
  const { toast } = useToast();

  const handleLaunch = () => {
    toast({
      title: "Launch Sequence Initiated",
      description: "T-minus 10 seconds and counting...",
      variant: "default",
    });
  };

  const handleAbort = () => {
    toast({
      title: "ABORT SEQUENCE ACTIVATED",
      description: "All systems shutting down...",
      variant: "destructive",
    });
  };

  return (
    <div className="military-panel space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold military-text-glow">Mission Control</h2>
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-military-accent animate-pulse" />
          <span className="text-sm text-military-muted">SECURE</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="text-sm text-military-muted">Mission Status</div>
          <div className="text-military-accent animate-pulse flex items-center gap-2">
            <Power className="w-4 h-4" />
            READY
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="text-sm text-military-muted">Countdown</div>
          <div className="font-mono text-military-text">T-00:00:00</div>
        </div>
      </div>

      <div className="flex space-x-4 mt-4">
        <Button 
          onClick={handleLaunch}
          className="military-button flex-1 flex items-center justify-center gap-2"
        >
          <Power className="w-4 h-4" />
          INITIATE LAUNCH
        </Button>
        
        <Button 
          onClick={handleAbort}
          className="military-button-warning flex-1 flex items-center justify-center gap-2"
        >
          <AlertTriangle className="w-4 h-4" />
          ABORT
        </Button>
      </div>
    </div>
  );
};

export default MissionControl;