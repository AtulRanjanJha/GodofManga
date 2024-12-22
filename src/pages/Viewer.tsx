import { useState, useEffect } from "react";
import { Header } from "@/components/viewer/Header";
import { Sidebar } from "@/components/viewer/Sidebar";
import { Navigation } from "@/components/viewer/Navigation";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const chapterLinks = {
  "1": "1kYI-g_z_o_GE8ZLb1YJlhQuRa-YTDWem",
  "2": "1fhk8rouNUra9sQifsA_DdK5y1Oyo2P6m",
  "3": "", // Empty string means chapter is not available
};

const Viewer = () => {
  const [currentChapter, setCurrentChapter] = useState("1");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHeaderSticky, setIsHeaderSticky] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [fitMode, setFitMode] = useState<'both' | 'height' | 'width'>('both');
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    let timeoutId: number;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (Math.abs(currentScrollY - lastScrollY) > 50) {
        setIsHeaderVisible(currentScrollY < lastScrollY);
        setLastScrollY(currentScrollY);
      }

      // Reset timer
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setIsHeaderVisible(true);
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  const handleChapterChange = (chapter: string) => {
    if (chapterLinks[chapter as keyof typeof chapterLinks]) {
      setCurrentChapter(chapter);
    }
  };

  const getFitClass = () => {
    switch (fitMode) {
      case 'both':
        return 'w-full h-full object-contain';
      case 'height':
        return 'h-full w-auto';
      case 'width':
        return 'w-full h-auto';
      default:
        return 'w-full h-full object-contain';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className={`transition-transform duration-300 ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <Header />
      </div>
      
      <main className={`pt-16 pb-20 px-4 md:px-12 max-w-6xl mx-auto transition-all duration-300 ${
        isSidebarOpen ? 'mr-64' : ''
      }`}>
        <div className={`w-full aspect-[4/3] relative ${getFitClass()}`}>
          <iframe 
            src={`https://drive.google.com/file/d/${chapterLinks[currentChapter as keyof typeof chapterLinks]}/preview`}
            className="w-full h-full absolute inset-0"
            allow="autoplay"
          />
        </div>
      </main>
      
      <Sidebar 
        onOpenChange={setIsSidebarOpen}
        onFitChange={setFitMode}
        isHeaderSticky={isHeaderSticky}
        onHeaderStickyChange={setIsHeaderSticky}
      />
      <Navigation 
        currentChapter={currentChapter}
        onChapterChange={handleChapterChange}
        onPrevPage={() => {}}
        onNextPage={() => {}}
        availableChapters={Object.keys(chapterLinks).filter(
          chapter => chapterLinks[chapter as keyof typeof chapterLinks]
        )}
      >
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </Navigation>
    </div>
  );
};

export default Viewer;