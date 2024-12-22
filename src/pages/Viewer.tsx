import { useState, useEffect } from "react";
import { Header } from "@/components/viewer/Header";
import { Sidebar } from "@/components/viewer/Sidebar";
import { Navigation } from "@/components/viewer/Navigation";
import * as pdfjsLib from 'pdfjs-dist';

// Initialize PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

// Convert Google Drive view URL to direct download URL
const getDirectDownloadUrl = (driveUrl: string) => {
  const fileId = driveUrl.match(/\/d\/(.*?)\//)![1];
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
};

const Viewer = () => {
  const [currentChapter, setCurrentChapter] = useState("1");
  const [currentPage, setCurrentPage] = useState("1");
  const [pdfPages, setPdfPages] = useState<string[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPDF = async () => {
      try {
        setIsLoading(true);
        const pdfUrl = getDirectDownloadUrl("https://drive.google.com/file/d/1kYI-g_z_o_GE8ZLb1YJlhQuRa-YTDWem/view");
        
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        setTotalPages(pdf.numPages);
        
        const pages: string[] = [];
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 1.5 });
          
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d')!;
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          
          await page.render({
            canvasContext: context,
            viewport: viewport
          }).promise;
          
          pages.push(canvas.toDataURL());
        }
        
        setPdfPages(pages);
      } catch (error) {
        console.error('Error loading PDF:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPDF();
  }, []);
  
  const handleChapterChange = (chapter: string) => {
    setCurrentChapter(chapter);
    setCurrentPage("1");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    const pageElement = document.getElementById(`page-${page}`);
    if (pageElement) {
      pageElement.scrollIntoView({ behavior: 'smooth' });
    }
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
        {isLoading ? (
          <div className="flex items-center justify-center h-[60vh]">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="space-y-8">
            {pdfPages.map((pageUrl, index) => (
              <div 
                key={index}
                id={`page-${index + 1}`}
                className="aspect-auto w-full relative"
              >
                <img
                  src={pageUrl}
                  alt={`Page ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        )}
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