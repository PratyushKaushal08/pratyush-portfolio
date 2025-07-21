import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Palette, Check } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ColorThemePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, setTheme } = useTheme();

  const themes = [
    { 
      name: 'Default', 
      value: 'default' as const, 
      color: 'bg-gray-500',
      preview: 'hsl(220, 14.3%, 95.9%)'
    },
    { 
      name: 'Red', 
      value: 'red' as const, 
      color: 'bg-red-500',
      preview: 'hsl(0, 72%, 51%)'
    },
    { 
      name: 'Blue', 
      value: 'blue' as const, 
      color: 'bg-blue-500',
      preview: 'hsl(217, 91%, 60%)'
    },
    { 
      name: 'Green', 
      value: 'green' as const, 
      color: 'bg-green-500',
      preview: 'hsl(142, 71%, 45%)'
    },
    { 
      name: 'Purple', 
      value: 'purple' as const, 
      color: 'bg-purple-500',
      preview: 'hsl(262, 83%, 58%)'
    },
    { 
      name: 'Orange', 
      value: 'orange' as const, 
      color: 'bg-orange-500',
      preview: 'hsl(25, 95%, 53%)'
    },
  ];

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="relative">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="sm"
          variant="outline"
          className="p-3 rounded-full bg-card/90 backdrop-blur-sm border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
        >
          <Palette className="w-4 h-4" />
        </Button>

        {isOpen && (
          <Card className="absolute top-12 right-0 bg-card/95 backdrop-blur-sm border-primary/20 shadow-lg p-4 w-48">
            <h3 className="text-sm font-semibold mb-3 text-center">Choose Theme Color</h3>
            <div className="grid grid-cols-2 gap-2">
              {themes.map((theme) => (
                <Button
                  key={theme.value}
                  onClick={() => {
                    setTheme(theme.value);
                    setIsOpen(false);
                  }}
                  variant="ghost"
                  className="flex items-center justify-between p-2 h-auto hover:bg-primary/10 relative"
                >
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: theme.preview }}
                    />
                    <span className="text-xs">{theme.name}</span>
                  </div>
                  {currentTheme === theme.value && (
                    <Check className="w-3 h-3 text-primary" />
                  )}
                </Button>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ColorThemePicker;