import { Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

interface SuccessCelebrationProps {
  boyfriendName: string;
  fromName: string;
  onReset: () => void;
}

interface Confetti {
  id: number;
  left: number;
  delay: number;
  duration: number;
  rotation: number;
}

export default function SuccessCelebration({ boyfriendName, fromName, onReset }: SuccessCelebrationProps) {
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setConfetti([]);
      return;
    }

    // Generate confetti hearts
    const confettiHearts: Confetti[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 2,
      rotation: Math.random() * 360
    }));

    setConfetti(confettiHearts);

    // Clear confetti after animation
    const timer = setTimeout(() => {
      setConfetti([]);
    }, 4000);

    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <section className="text-center space-y-8 animate-fade-in relative">
      {/* Confetti */}
      {!prefersReducedMotion && confetti.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
          {confetti.map((item) => (
            <div
              key={item.id}
              className="absolute top-0 animate-confetti-fall"
              style={{
                left: `${item.left}%`,
                animationDelay: `${item.delay}s`,
                animationDuration: `${item.duration}s`,
              }}
            >
              <Heart 
                className="text-primary fill-current w-6 h-6"
                style={{ transform: `rotate(${item.rotation}deg)` }}
              />
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center mb-6">
        <div className="relative">
          <img 
            src="/assets/generated/heart-wreath.dim_1024x1024.png" 
            alt="Heart wreath decoration"
            className="w-48 h-48 md:w-64 md:h-64 object-contain animate-gentle-pulse"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="w-16 h-16 text-primary animate-pulse" />
          </div>
        </div>
      </div>

      <Card className="bg-card/90 backdrop-blur-sm border-2 shadow-2xl">
        <CardContent className="pt-10 pb-10 px-6 md:px-10 space-y-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              You Said Yes! 💕
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              {boyfriendName}, you've made me the happiest person alive!
            </p>
          </div>

          <div className="py-6">
            <div className="flex justify-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-primary fill-current animate-pulse" />
              <Heart className="w-8 h-8 text-primary fill-current animate-pulse" style={{ animationDelay: '0.2s' }} />
              <Heart className="w-8 h-8 text-primary fill-current animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>

          <div className="space-y-4 text-lg md:text-xl leading-relaxed text-foreground/90">
            <p>
              This is just the beginning of our forever. I promise to love you more each day, 
              to support your dreams, and to be your partner in every adventure.
            </p>
            <p>
              Thank you for choosing me. Thank you for being you. 
              I can't wait to create a lifetime of beautiful memories together.
            </p>
          </div>

          <div className="pt-4">
            <p className="text-lg font-medium text-foreground">
              Forever yours,
            </p>
            <p className="text-2xl font-bold text-primary">
              {fromName}
            </p>
          </div>
        </CardContent>
      </Card>

      <Button
        variant="outline"
        size="lg"
        onClick={onReset}
        className="rounded-full"
      >
        <Heart className="mr-2 h-4 w-4" />
        Relive This Moment
      </Button>
    </section>
  );
}
