import { useState } from "react";
import { ChevronRight, MessageSquare, Bookmark, Info, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  onOpenChange: (isOpen: boolean) => void;
}

export const Sidebar = ({ onOpenChange }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    onOpenChange(!isOpen);
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
        <div className="p-4 space-y-6">
          <div className="space-y-2">
            <h3 className="font-semibold">Reading Options</h3>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                <MessageSquare className="mr-2 h-4 w-4" />
                Comments
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Bookmark className="mr-2 h-4 w-4" />
                Bookmarks
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Info className="mr-2 h-4 w-4" />
                Details
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <AlertTriangle className="mr-2 h-4 w-4" />
                Report
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">View Settings</h3>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                Header Sticky
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Long Strip
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Fit Both
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Left to Right
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};