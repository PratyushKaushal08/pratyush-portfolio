const AnimatedWaves = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Wave 1 */}
      <div 
        className="absolute top-1/4 left-0 w-[150%] h-32 opacity-10"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)',
          borderRadius: '50%',
          animation: 'wave-move-1 15s ease-in-out infinite',
          transform: 'translateX(-50%)'
        }}
      />
      
      {/* Wave 2 */}
      <div 
        className="absolute top-1/2 left-0 w-[150%] h-40 opacity-15"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.4), transparent)',
          borderRadius: '50%',
          animation: 'wave-move-2 18s ease-in-out infinite',
          transform: 'translateX(-50%)',
          animationDelay: '2s'
        }}
      />
      
      {/* Wave 3 */}
      <div 
        className="absolute top-3/4 left-0 w-[150%] h-36 opacity-12"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.35), transparent)',
          borderRadius: '50%',
          animation: 'wave-move-3 20s ease-in-out infinite',
          transform: 'translateX(-50%)',
          animationDelay: '4s'
        }}
      />
    </div>
  );
};

export default AnimatedWaves;