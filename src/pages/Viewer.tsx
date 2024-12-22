import { useState } from "react";
import { Header } from "@/components/viewer/Header";
import { Sidebar } from "@/components/viewer/Sidebar";
import { Navigation } from "@/components/viewer/Navigation";

const Viewer = () => {
  const [currentChapter, setCurrentChapter] = useState("1");
  const [currentPage, setCurrentPage] = useState("1");
  const [totalPages] = useState(10); // Set this to the actual number of pages in your PDF

  const handleChapterChange = (chapter: string) => {
    setCurrentChapter(chapter);
    setCurrentPage("1");
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 pb-20 px-4 md:px-12 max-w-6xl mx-auto">
        <div className="w-full aspect-[4/3] relative">
          <iframe 
            src="https://drive.google.com/file/d/1kYI-g_z_o_GE8ZLb1YJlhQuRa-YTDWem/preview"
            className="w-full h-full absolute inset-0"
            allow="autoplay"
          />
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
        totalPages={totalPages}
      />
    </div>
  );
};

export default Viewer;