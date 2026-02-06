import { useState } from 'react';
import { Heart, Sparkles, Settings, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FloatingHearts from './FloatingHearts';
import SuccessCelebration from './SuccessCelebration';
import PersonalizationPanel from './PersonalizationPanel';

type ViewState = 'hero' | 'gift1' | 'gift2' | 'gift3' | 'proposal' | 'success';

export default function ProposeDayPage() {
  const [viewState, setViewState] = useState<ViewState>('hero');
  const [showPersonalization, setShowPersonalization] = useState(false);
  const [boyfriendName, setBoyfriendName] = useState('');
  const [fromName, setFromName] = useState('');
  const [customDate, setCustomDate] = useState('');
  const [customMessage, setCustomMessage] = useState('');

  const displayBoyfriendName = boyfriendName.trim() || 'my lovely baby';
  const displayFromName = fromName.trim() || 'your Baby girl';
  const displayDate = customDate.trim() || 'February 8th, 2026';
  const displayMessage = customMessage.trim() || 
    'Every moment with you feels like a beautiful dream. You make my world brighter, my heart fuller, and my life complete.';

  const handleReveal = () => {
    setViewState('gift1');
  };

  const handleNextGift = () => {
    if (viewState === 'gift1') {
      setViewState('gift2');
    } else if (viewState === 'gift2') {
      setViewState('gift3');
    } else if (viewState === 'gift3') {
      setViewState('proposal');
    }
  };

  const handleYes = () => {
    setViewState('success');
  };

  const handleReset = () => {
    setViewState('hero');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/assets/generated/romantic-bokeh-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      </div>

      <FloatingHearts />

      {/* Personalization Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setShowPersonalization(!showPersonalization)}
          className="rounded-full shadow-lg bg-card/80 backdrop-blur-sm hover:bg-card"
          aria-label="Toggle personalization"
        >
          <Settings className="h-4 w-4" />
        </Button>
      </div>

      {/* Personalization Panel */}
      {showPersonalization && (
        <PersonalizationPanel
          boyfriendName={boyfriendName}
          fromName={fromName}
          customDate={customDate}
          customMessage={customMessage}
          onBoyfriendNameChange={setBoyfriendName}
          onFromNameChange={setFromName}
          onCustomDateChange={setCustomDate}
          onCustomMessageChange={setCustomMessage}
          onClose={() => setShowPersonalization(false)}
        />
      )}

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {viewState === 'hero' && (
            <section className="text-center space-y-8 animate-fade-in">
              {/* Heart Wreath */}
              <div className="flex justify-center mb-6">
                <img 
                  src="/assets/generated/heart-wreath.dim_1024x1024.png" 
                  alt="Heart wreath decoration"
                  className="w-48 h-48 md:w-64 md:h-64 object-contain animate-gentle-pulse"
                />
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
                  To {displayBoyfriendName}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground font-light">
                  {displayDate}
                </p>
              </div>

              <Card className="bg-card/80 backdrop-blur-sm border-2 shadow-2xl">
                <CardContent className="pt-8 pb-8 px-6 md:px-10">
                  <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                    {displayMessage}
                  </p>
                </CardContent>
              </Card>

              <Button
                size="lg"
                onClick={handleReveal}
                className="text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <Heart className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Open My Heart
                <Sparkles className="ml-2 h-5 w-5 group-hover:animate-pulse" />
              </Button>
            </section>
          )}

          {viewState === 'gift1' && (
            <section className="text-center space-y-8 animate-fade-in">
              <div className="flex justify-center mb-6">
                <img 
                  src="/assets/generated/gift-box.dim_512x512.png" 
                  alt="Gift box"
                  className="w-40 h-40 md:w-56 md:h-56 object-contain animate-gentle-pulse"
                />
              </div>

              <Card className="bg-card/90 backdrop-blur-sm border-2 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-3xl md:text-4xl font-bold text-center">
                    A Little Surprise for You
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pb-10">
                  <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                    You light up my world in ways I never thought possible. 
                    Your smile is my favorite sight, and your laughter is my favorite sound.
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground italic">
                    I have more to show you...
                  </p>

                  <Button
                    size="lg"
                    onClick={handleNextGift}
                    className="text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <Gift className="mr-2 h-5 w-5" />
                    Continue
                  </Button>
                </CardContent>
              </Card>
            </section>
          )}

          {viewState === 'gift2' && (
            <section className="text-center space-y-8 animate-fade-in">
              <div className="flex justify-center mb-6">
                <img 
                  src="/assets/generated/red-rose.dim_512x512.png" 
                  alt="Red rose"
                  className="w-40 h-40 md:w-56 md:h-56 object-contain animate-gentle-pulse"
                />
              </div>

              <Card className="bg-card/90 backdrop-blur-sm border-2 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-3xl md:text-4xl font-bold text-center">
                    You Are My Everything
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pb-10">
                  <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                    Every day with you is a blessing. You make the ordinary extraordinary, 
                    and you turn every moment into a cherished memory.
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground italic">
                    There's one more thing...
                  </p>

                  <Button
                    size="lg"
                    onClick={handleNextGift}
                    className="text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <Gift className="mr-2 h-5 w-5" />
                    Continue
                  </Button>
                </CardContent>
              </Card>
            </section>
          )}

          {viewState === 'gift3' && (
            <section className="text-center space-y-8 animate-fade-in">
              <div className="flex justify-center mb-6">
                <img 
                  src="/assets/generated/teddy-bear.dim_512x512.png" 
                  alt="Teddy bear"
                  className="w-40 h-40 md:w-56 md:h-56 object-contain animate-gentle-pulse"
                />
              </div>

              <Card className="bg-card/90 backdrop-blur-sm border-2 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-3xl md:text-4xl font-bold text-center">
                    Forever and Always
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pb-10">
                  <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                    I want to hold your hand through every season, celebrate every joy, 
                    and comfort you through every challenge. You are my home, my heart, my forever.
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground italic">
                    Now for the most important question...
                  </p>

                  <Button
                    size="lg"
                    onClick={handleNextGift}
                    className="text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Continue
                  </Button>
                </CardContent>
              </Card>
            </section>
          )}

          {viewState === 'proposal' && (
            <section className="text-center space-y-8 animate-fade-in">
              <div className="flex justify-center mb-6">
                <img 
                  src="/assets/generated/engagement-ring.dim_512x512.png" 
                  alt="Engagement ring"
                  className="w-40 h-40 md:w-56 md:h-56 object-contain animate-gentle-pulse"
                />
              </div>

              <Card className="bg-card/90 backdrop-blur-sm border-2 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-3xl md:text-5xl font-bold text-center">
                    Will You Be Mine Forever?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8 pb-10">
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    You are the love of my life, my best friend, and my everything. 
                    I want to spend every moment of forever making you smile.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                      size="lg"
                      onClick={handleYes}
                      className="text-xl px-12 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 min-w-[200px]"
                    >
                      <Heart className="mr-2 h-6 w-6 fill-current" />
                      Yes! Forever!
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground/70 italic">
                    From {displayFromName}
                  </p>
                </CardContent>
              </Card>
            </section>
          )}

          {viewState === 'success' && (
            <SuccessCelebration 
              boyfriendName={displayBoyfriendName}
              fromName={displayFromName}
              onReset={handleReset}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center text-sm text-muted-foreground/60">
        <p>
          © 2026. Built with <Heart className="inline h-3 w-3 fill-current text-primary" /> using{' '}
          <a 
            href="https://caffeine.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
