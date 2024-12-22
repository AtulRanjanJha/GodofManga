import { useState } from "react";
import { ChevronRight, MessageSquare, Bookmark, Info, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useToast } from "@/components/ui/use-toast";

interface SidebarProps {
  onOpenChange: (isOpen: boolean) => void;
  onFitChange: (mode: 'both' | 'height' | 'width') => void;
  isHeaderSticky: boolean;
  onHeaderStickyChange: (sticky: boolean) => void;
}

export const Sidebar = ({ onOpenChange, onFitChange, isHeaderSticky, onHeaderStickyChange }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [fitMode, setFitMode] = useState<'both' | 'height' | 'width'>('both');
  const [showDetails, setShowDetails] = useState(false);
  const [comment, setComment] = useState('');
  const { toast } = useToast();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    onOpenChange(!isOpen);
  };

  const handleFitChange = () => {
    const nextMode = fitMode === 'both' ? 'height' : fitMode === 'height' ? 'width' : 'both';
    setFitMode(nextMode);
    onFitChange(nextMode);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast({
      title: isBookmarked ? "Bookmark removed" : "Bookmark added",
      duration: 2000,
    });
  };

  const handleReport = () => {
    toast({
      title: "Report submitted",
      description: "Thank you for your feedback",
      duration: 3000,
    });
  };

  return (
    <div
      className={cn(
        "fixed top-16 right-0 h-[calc(100vh-4rem)] bg-background/80 backdrop-blur-md border-l transition-all duration-300",
        isOpen ? "w-64" : "w-12"
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute -left-10 top-4"
        onClick={toggleSidebar}
      >
        <ChevronRight className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </Button>

      {isOpen && (
        <div className="p-4 space-y-6 overflow-y-auto h-full">
          <div className="space-y-2">
            <h3 className="font-semibold">Reading Options</h3>
            <div className="space-y-1">
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => setShowDetails(!showDetails)}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Comments
              </Button>
              {showDetails && (
                <div className="pl-6 space-y-2">
                  <textarea
                    className="w-full p-2 border rounded"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <Button 
                    size="sm" 
                    onClick={() => {
                      toast({
                        title: "Comment added",
                        duration: 2000,
                      });
                      setComment('');
                    }}
                  >
                    Add Comment
                  </Button>
                </div>
              )}
              
              <Button 
                variant="ghost" 
                className={cn("w-full justify-start", isBookmarked && "text-primary")}
                onClick={handleBookmark}
              >
                <Bookmark className="mr-2 h-4 w-4" fill={isBookmarked ? "currentColor" : "none"} />
                Bookmarks
              </Button>

              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start">
                    <Info className="mr-2 h-4 w-4" />
                    Details
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-6 py-2">
                  <p className="text-sm text-muted-foreground">
                    Title: Sample Manga<br />
                    Author: John Doe<br />
                    Chapters: 10<br />
                    Status: Ongoing
                  </p>
                </CollapsibleContent>
              </Collapsible>

              <Button variant="ghost" className="w-full justify-start" onClick={handleReport}>
                <AlertTriangle className="mr-2 h-4 w-4" />
                Report
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">View Settings</h3>
            <div className="space-y-1">
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => onHeaderStickyChange(!isHeaderSticky)}
              >
                Header Sticky: {isHeaderSticky ? "On" : "Off"}
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={handleFitChange}
              >
                Fit {fitMode === 'both' ? 'Both' : fitMode === 'height' ? 'Height' : 'Width'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};