import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Navigation = () => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center space-x-4 bg-background/80 backdrop-blur-md rounded-full border px-4 py-2">
      <Button variant="ghost" size="icon">
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Select defaultValue="1">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select chapter" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Chapter 1</SelectItem>
          <SelectItem value="2">Chapter 2</SelectItem>
          <SelectItem value="3">Chapter 3</SelectItem>
        </SelectContent>
      </Select>
      
      <Select defaultValue="1">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select page" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Page 1</SelectItem>
          <SelectItem value="2">Page 2</SelectItem>
          <SelectItem value="3">Page 3</SelectItem>
        </SelectContent>
      </Select>
      
      <Button variant="ghost" size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};