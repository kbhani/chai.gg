
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RituDetail from "./pages/RituDetail";
import NotFound from "./pages/NotFound";
import { RituInfo } from './components/RituColumn';

const queryClient = new QueryClient();

// Ritu data shared between Index and RituDetail
const ritus: RituInfo[] = [
  {
    name: "Vasant",
    color: "#7FD1AE", // Spring - fresh green
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "Vasant (Spring) chai is light and floral, with hints of fresh herbs and fragrant spices that awaken the senses. This seasonal blend celebrates renewal and growth with ingredients like fresh mint, cardamom, and a touch of rose—perfect for warming spring mornings and cool evenings."
  },
  {
    name: "Grishma",
    color: "#FFCC66", // Summer - warm yellow
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "Grishma (Summer) chai is cooling and refreshing, designed to balance the heat of summer. This seasonal blend features cooling spices like fennel and coriander, often served with a hint of lemongrass and mint. It can be enjoyed hot or iced, providing relief during the hottest months."
  },
  {
    name: "Varsha",
    color: "#5DA9E9", // Monsoon - blue
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "Varsha (Monsoon) chai is robust and warming, perfect for rainy days. This comforting blend includes extra ginger and pepper to help ward off seasonal colds, along with nutmeg and cloves that create a deeply aromatic experience that pairs perfectly with the rhythm of falling rain."
  },
  {
    name: "Sharad",
    color: "#FF9F6B", // Autumn - orange
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "Sharad (Autumn) chai captures the transition of seasons with warm, grounding spices. This balanced blend features cinnamon and star anise, creating a golden brew that's both energizing and soothing. Its moderate spice profile makes it versatile for any time of day during the harvest season."
  },
  {
    name: "Hemant",
    color: "#B690E3", // Pre-winter - purple
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "Hemant (Pre-winter) chai is rich and warming, designed to prepare the body for the coming cold. This hearty blend incorporates warming spices like ginger, black pepper, and cinnamon in higher proportions, creating a spicy-sweet profile that helps stimulate circulation and provide comfort."
  },
  {
    name: "Shishir",
    color: "#A8D1E7", // Winter - ice blue
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "Shishir (Winter) chai is the richest and most robust blend of the year. This deeply warming concoction features a generous mix of cardamom, cloves, cinnamon, and ginger with a touch of black pepper, creating a powerful, aromatic brew that provides warmth and comfort during the coldest months."
  }
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index ritus={ritus} />} />
          <Route path="/ritu/:ritu" element={<RituDetail ritus={ritus} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
