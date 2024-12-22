import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface NavigationProps {
  currentChapter: string;
  onChapterChange: (chapter: string) => void;
  onPrevPage: () => void;
  onNextPage: () => void;
  availableChapters: string[];
  children?: React.ReactNode;
}

export const Navigation = ({
  currentChapter,
  onChapterChange,
  onPrevPage,
  onNextPage,
  availableChapters,
  children,
}: NavigationProps) => {
  const handleScroll = (direction: 'up' | 'down') => {
    const scrollAmount = window.innerHeight * 0.8;
    window.scrollBy({
      top: direction === 'up' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center space-x-4 bg-background/80 backdrop-blur-md rounded-full border px-4 py-2">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => handleScroll('up')}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Select value={currentChapter} onValueChange={onChapterChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select chapter" />
        </SelectTrigger>
        <SelectContent>
          {availableChapters.map((chapter) => (
            <SelectItem 
              key={chapter} 
              value={chapter}
            >
              Chapter {chapter}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => handleScroll('down')}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {children}
    </div>
  );
};