import { Header } from "@/components/viewer/Header";
import { Sidebar } from "@/components/viewer/Sidebar";
import { Navigation } from "@/components/viewer/Navigation";

const Viewer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 pb-20 px-4 md:px-12 max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="aspect-[3/4] w-full max-h-[80vh] relative">
            <img
              src="/lovable-uploads/0ba4a759-8ab4-4a88-9016-52c0594f1937.png"
              alt="Manga page 1"
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="aspect-[3/4] w-full max-h-[80vh] relative">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Manga page 2"
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="aspect-[3/4] w-full max-h-[80vh] relative">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475"
              alt="Manga page 3"
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="aspect-[3/4] w-full max-h-[80vh] relative">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              alt="Manga page 4"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </main>
      
      <Sidebar />
      <Navigation />
    </div>
  );
};

export default Viewer;