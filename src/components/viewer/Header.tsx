import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="flex items-center justify-between px-4 h-16">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">MangaViewer</h1>
        </div>
        
        <div className="hidden md:flex items-center max-w-md w-full relative">
          <Input
            type="search"
            placeholder="Search manga..."
            className="w-full pl-10"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Login
          </Button>
          <Button>Menu</Button>
        </div>
      </div>
    </header>
  );
};