import { useState } from "react";
import { Header } from "@/components/viewer/Header";
import { Sidebar } from "@/components/viewer/Sidebar";
import { Navigation } from "@/components/viewer/Navigation";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

// Define chapter links - add more as needed
const chapterLinks = {
  "1": "1kYI-g_z_o_GE8ZLb1YJlhQuRa-YTDWem",
  "2": "", // Empty string means chapter is not available
  "3": "",
};

const Viewer = () => {
  const [currentChapter, setCurrentChapter] = useState("1");
  const [currentPage, setCurrentPage] = useState("1");
  const [totalPages] = useState(10);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Button
        variant="outline"
        size="icon"
        className="fixed top-20 right-4 z-50"
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
      
      <main className={`pt-16 pb-20 px-4 md:px-12 max-w-6xl mx-auto transition-all duration-300 ${isSidebarOpen ? 'mr-64' : ''}`}>
        <div className="w-full aspect-[4/3] relative">
          <iframe 
            src={`https://drive.google.com/file/d/${chapterLinks[currentChapter as keyof typeof chapterLinks]}/preview`}
            className="w-full h-full absolute inset-0"
            allow="autoplay"
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
      />
    </div>
  );
};

export default Viewer;