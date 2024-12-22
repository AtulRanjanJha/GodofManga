import { useState } from "react";
import { Header } from "@/components/viewer/Header";
import { Sidebar } from "@/components/viewer/Sidebar";
import { Navigation } from "@/components/viewer/Navigation";
import { Button } from "@/components/ui/button";
import { Moon, Sun, ZoomIn, ZoomOut } from "lucide-react";
import { useTheme } from "next-themes";

// Define chapter links - add more as needed
const chapterLinks = {
  "1": "1kYI-g_z_o_GE8ZLb1YJlhQuRa-YTDWem",
  "2": "1fhk8rouNUra9sQifsA_DdK5y1Oyo2P6m",
  "3": "", // Empty string means chapter is not available
};

const Viewer = () => {
  const [currentChapter, setCurrentChapter] = useState("1");
  const [currentPage, setCurrentPage] = useState("1");
  const [totalPages] = useState(10);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [zoom, setZoom] = useState(100);
  const { theme, setTheme } = useTheme();

  const handleChapterChange = (chapter: string) => {
    if (chapterLinks[chapter as keyof typeof chapterLinks]) {
      setCurrentChapter(chapter);
      setCurrentPage("1");
    }
  };
  
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };
  
  const handlePrevPage = () => {
    const currentPageNum = parseInt(currentPage);
    if (currentPageNum > 1) {
      handlePageChange((currentPageNum - 1).toString());
    }
  };
  
  const handleNextPage = () => {
    const currentPageNum = parseInt(currentPage);
    if (currentPageNum < totalPages) {
      handlePageChange((currentPageNum + 1).toString());
    }
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 10, 50));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className={`pt-16 pb-20 px-4 md:px-12 max-w-6xl mx-auto transition-all duration-300 ${isSidebarOpen ? 'mr-64' : ''}`}>
        <div className="w-full aspect-[4/3] relative">
          <iframe 
            src={`https://drive.google.com/file/d/${chapterLinks[currentChapter as keyof typeof chapterLinks]}/preview`}
            className="w-full h-full absolute inset-0"
            allow="autoplay"
            style={{ 
              transform: `scale(${zoom / 100})`,
              transformOrigin: 'top left',
              transition: 'transform 0.3s ease'
            }}
          />
        </div>
      </main>
      
      <Sidebar onOpenChange={setIsSidebarOpen} />
      <Navigation 
        currentChapter={currentChapter}
        currentPage={currentPage}
        onChapterChange={handleChapterChange}
        onPageChange={handlePageChange}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        totalPages={totalPages}
        availableChapters={Object.keys(chapterLinks).filter(
          chapter => chapterLinks[chapter as keyof typeof chapterLinks]
        )}
      >
        <div className="flex items-center gap-2">
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
          <Button
            variant="outline"
            size="icon"
            onClick={handleZoomOut}
          >
            <ZoomOut className="h-4 w-4" />
            <span className="sr-only">Zoom out</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleZoomIn}
          >
            <ZoomIn className="h-4 w-4" />
            <span className="sr-only">Zoom in</span>
          </Button>
        </div>
      </Navigation>
    </div>
  );
};

export default Viewer;