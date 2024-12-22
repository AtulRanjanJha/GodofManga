import { Header } from "@/components/viewer/Header";
import { Sidebar } from "@/components/viewer/Sidebar";
import { Navigation } from "@/components/viewer/Navigation";

const Viewer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 pb-20 px-4 md:px-12 max-w-6xl mx-auto">
        <div className="aspect-[3/4] w-full max-h-[80vh] relative mt-8">
          <img
            src="/lovable-uploads/0ba4a759-8ab4-4a88-9016-52c0594f1937.png"
            alt="Manga page"
            className="w-full h-full object-contain"
          />
        </div>
      </main>
      
      <Sidebar />
      <Navigation />
    </div>
  );
};

export default Viewer;