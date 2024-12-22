import { useState } from "react";
import { Header } from "@/components/viewer/Header";
import { Sidebar } from "@/components/viewer/Sidebar";
import { Navigation } from "@/components/viewer/Navigation";

// Mock data - in a real app this would come from an API
const chapters = {
  "1": [
    "/lovable-uploads/0ba4a759-8ab4-4a88-9016-52c0594f1937.png",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  ],
  "2": [
    "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    "https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8"
  ],
  "3": [
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2"
  ]
};

const Viewer = () => {
  const [currentChapter, setCurrentChapter] = useState("1");
  const [currentPage, setCurrentPage] = useState("1");
  
  const handleChapterChange = (chapter: string) => {
    console.log("Changing to chapter:", chapter);
    setCurrentChapter(chapter);
    setCurrentPage("1"); // Reset to first page when chapter changes
  };
  
  const handlePageChange = (page: string) => {
    console.log("Changing to page:", page);
    setCurrentPage(page);
  };
  
  const handlePrevPage = () => {
    const currentPageNum = parseInt(currentPage);
    if (currentPageNum > 1) {
      setCurrentPage((currentPageNum - 1).toString());
    }
  };
  
  const handleNextPage = () => {
    const currentPageNum = parseInt(currentPage);
    if (currentPageNum < chapters[currentChapter].length) {
      setCurrentPage((currentPageNum + 1).toString());
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 pb-20 px-4 md:px-12 max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="aspect-[3/4] w-full max-h-[80vh] relative">
            <img
              src={chapters[currentChapter][parseInt(currentPage) - 1]}
              alt={`Chapter ${currentChapter} Page ${currentPage}`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </main>
      
      <Sidebar />
      <Navigation 
        currentChapter={currentChapter}
        currentPage={currentPage}
        onChapterChange={handleChapterChange}
        onPageChange={handlePageChange}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        totalPages={chapters[currentChapter].length}
      />
    </div>
  );
};

export default Viewer;