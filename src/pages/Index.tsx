import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="text-center space-y-6 animate-fade-in">
        <h1 className="text-4xl font-bold tracking-tight">Welcome to MangaViewer</h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          Experience manga reading like never before with our premium viewer
        </p>
        <Button 
          onClick={() => navigate("/viewer")}
          className="px-8 py-6 text-lg hover:scale-105 transition-transform"
        >
          Start Reading
        </Button>
      </div>
    </div>
  );
};

export default Index;