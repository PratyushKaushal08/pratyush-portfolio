import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Pause, Volume2, VolumeX, Move, SkipForward } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [position, setPosition] = useState({ x: window.innerWidth - 200, y: window.innerHeight - 150 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const audioRef = useRef<HTMLAudioElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);

  // Multiple NCS tracks
  const tracks = [
    {
      name: "Ambient Vibes",
      src: "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3"
    },
    {
      name: "Chill Lofi",
      src: "https://cdn.pixabay.com/audio/2022/03/15/audio_c2d728b5b4.mp3"
    },
    {
      name: "Dreamy Synth",
      src: "https://cdn.pixabay.com/audio/2021/08/04/audio_12b0c7443e.mp3"
    }
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
    }
  }, [volume]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
      
      // Keep within viewport bounds
      const maxX = window.innerWidth - 200;
      const maxY = window.innerHeight - 100;
      
      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY))
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (playerRef.current) {
      const rect = playerRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const nextTrack = () => {
    const wasPlaying = isPlaying;
    setIsPlaying(false);
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    
    // Resume playing if it was playing before
    if (wasPlaying) {
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch(console.error);
          setIsPlaying(true);
        }
      }, 100);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div 
      ref={playerRef}
      className={`fixed z-50 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        userSelect: 'none'
      }}
      onMouseDown={handleMouseDown}
    >
      <Card className="bg-card/90 backdrop-blur-sm border-primary/20 shadow-lg p-4 hover:shadow-xl transition-shadow">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Move className="w-3 h-3" />
          </div>
          <Button
            onClick={togglePlay}
            size="sm"
            variant="ghost"
            className="p-2 hover:bg-primary/20 rounded-full"
            onMouseDown={(e) => e.stopPropagation()}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </Button>
          
          <Button
            onClick={nextTrack}
            size="sm"
            variant="ghost"
            className="p-2 hover:bg-primary/20 rounded-full"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <SkipForward className="w-4 h-4" />
          </Button>
          
          <Button
            onClick={toggleMute}
            size="sm"
            variant="ghost"
            className="p-2 hover:bg-primary/20 rounded-full"
            onMouseDown={(e) => e.stopPropagation()}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </Button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            onMouseDown={(e) => e.stopPropagation()}
            className="w-16 h-1 bg-primary/30 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${volume * 100}%, hsl(var(--primary) / 0.3) ${volume * 100}%, hsl(var(--primary) / 0.3) 100%)`
            }}
          />
        </div>
        
        {/* Track info */}
        <div className="text-xs text-muted-foreground mt-2 flex items-center justify-between">
          <span className="truncate">🎵 {tracks[currentTrack].name}</span>
          {isPlaying && (
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-primary animate-pulse"></div>
              <div className="w-1 h-3 bg-primary animate-pulse" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-1 h-3 bg-primary animate-pulse" style={{ animationDelay: "0.4s" }}></div>
            </div>
          )}
        </div>
      </Card>

      <audio
        ref={audioRef}
        src={tracks[currentTrack].src}
        preload="metadata"
        onEnded={() => {
          setIsPlaying(false);
          nextTrack(); // Auto-play next track
        }}
      />
    </div>
  );
};

export default MusicPlayer;