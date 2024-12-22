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
  currentPage: string;
  onChapterChange: (chapter: string) => void;
  onPageChange: (page: string) => void;
  onPrevPage: () => void;
  onNextPage: () => void;
  totalPages: number;
  availableChapters: string[];
}

export const Navigation = ({
  currentChapter,
  currentPage,
  onChapterChange,
  onPageChange,
  onPrevPage,
  onNextPage,
  totalPages,
  availableChapters,
}: NavigationProps) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center space-x-4 bg-background/80 backdrop-blur-md rounded-full border px-4 py-2">
      <Button variant="ghost" size="icon" onClick={onPrevPage}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Select value={currentChapter} onValueChange={onChapterChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select chapter" />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: 3 }, (_, i) => (i + 1).toString()).map((chapter) => (
            <SelectItem 
              key={chapter} 
              value={chapter}
              disabled={!availableChapters.includes(chapter)}
            >
              Chapter {chapter}
              {!availableChapters.includes(chapter) && " (Not Available)"}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      <Select value={currentPage} onValueChange={onPageChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select page" />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: totalPages }, (_, i) => (
            <SelectItem key={i + 1} value={(i + 1).toString()}>
              Page {i + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      <Button variant="ghost" size="icon" onClick={onNextPage}>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};