import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Using a free ambient music from Pixabay (royalty-free)
  const audioSrc = "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
    }
  }, [volume]);

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

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="bg-card/90 backdrop-blur-sm border-primary/20 shadow-lg p-4">
        <div className="flex items-center gap-3">
          <Button
            onClick={togglePlay}
            size="sm"
            variant="ghost"
            className="p-2 hover:bg-primary/20 rounded-full"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </Button>
          
          <Button
            onClick={toggleMute}
            size="sm"
            variant="ghost"
            className="p-2 hover:bg-primary/20 rounded-full"
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
            className="w-16 h-1 bg-primary/30 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${volume * 100}%, hsl(var(--primary) / 0.3) ${volume * 100}%, hsl(var(--primary) / 0.3) 100%)`
            }}
          />
        </div>
        
        {isPlaying && (
          <div className="text-xs text-muted-foreground mt-2 animate-pulse">
            🎵 Ambient vibes
          </div>
        )}
      </Card>

      <audio
        ref={audioRef}
        src={audioSrc}
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default MusicPlayer;