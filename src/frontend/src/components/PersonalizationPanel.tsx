import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface PersonalizationPanelProps {
  boyfriendName: string;
  fromName: string;
  customDate: string;
  customMessage: string;
  onBoyfriendNameChange: (value: string) => void;
  onFromNameChange: (value: string) => void;
  onCustomDateChange: (value: string) => void;
  onCustomMessageChange: (value: string) => void;
  onClose: () => void;
}

export default function PersonalizationPanel({
  boyfriendName,
  fromName,
  customDate,
  customMessage,
  onBoyfriendNameChange,
  onFromNameChange,
  onCustomDateChange,
  onCustomMessageChange,
  onClose
}: PersonalizationPanelProps) {
  return (
    <div className="fixed inset-0 z-40 flex items-start justify-end p-4 pointer-events-none">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto pointer-events-auto bg-card/95 backdrop-blur-sm shadow-2xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-xl">Personalize Your Message</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full"
            aria-label="Close personalization panel"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="boyfriend-name">To (Boyfriend's Name)</Label>
            <Input
              id="boyfriend-name"
              placeholder="my lovely baby"
              value={boyfriendName}
              onChange={(e) => onBoyfriendNameChange(e.target.value)}
              className="bg-background/50"
            />
            <p className="text-xs text-muted-foreground">
              Leave blank to use "my lovely baby"
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="from-name">From (Your Name)</Label>
            <Input
              id="from-name"
              placeholder="your Baby girl"
              value={fromName}
              onChange={(e) => onFromNameChange(e.target.value)}
              className="bg-background/50"
            />
            <p className="text-xs text-muted-foreground">
              Leave blank to use "your Baby girl"
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="custom-date">Date (Optional)</Label>
            <Input
              id="custom-date"
              placeholder="February 8th, 2026"
              value={customDate}
              onChange={(e) => onCustomDateChange(e.target.value)}
              className="bg-background/50"
            />
            <p className="text-xs text-muted-foreground">
              Leave blank to use "February 8th, 2026"
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="custom-message">Your Message</Label>
            <Textarea
              id="custom-message"
              placeholder="Every moment with you feels like a beautiful dream..."
              value={customMessage}
              onChange={(e) => onCustomMessageChange(e.target.value)}
              rows={5}
              className="bg-background/50 resize-none"
            />
            <p className="text-xs text-muted-foreground">
              Leave blank to use the default romantic message
            </p>
          </div>

          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              💡 Tip: After personalizing, close this panel to see your beautiful proposal page. 
              You can reopen it anytime to make changes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
