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
    description: "Vasant (Spring) chai embodies the essence of renewal with its light and refreshing blend. This seasonal preparation features cardamom and a single Tulsi leaf, creating a delicate and aromatic brew. Perfect for the spring months, it can be sweetened with thread mishri, khaand, or carefully added honey or jaggery."
  },
  {
    name: "Grishma",
    color: "#FFCC66", // Summer - warm yellow
    description: "Grishma (Summer) chai is crafted to balance the intense summer heat. This cooling blend combines cardamom with the sacred Tulsi leaf, creating a refreshing experience. Sweetened with thread mishri or khaand, this preparation helps maintain equilibrium during the hottest months."
  },
  {
    name: "Varsha",
    color: "#5DA9E9", // Monsoon - blue
    description: "Varsha (Monsoon) chai is a robust blend perfect for rainy days. This warming preparation combines cardamom, black pepper, ginger, and long pepper, creating a deeply aromatic experience. The carefully balanced spices help ward off seasonal discomfort while providing comfort during monsoon months."
  },
  {
    name: "Sharad",
    color: "#FF9F6B", // Autumn - orange
    description: "Sharad (Autumn) chai captures the transition of seasons with warm, grounding spices. This balanced blend features cardamom, ginger, and cinnamon, creating a golden brew that's both energizing and soothing. Its moderate spice profile makes it versatile for any time of day during the harvest season."
  },
  {
    name: "Hemant",
    color: "#B690E3", // Pre-winter - purple
    description: "Hemant (Pre-winter) chai is a warming preparation for the approaching cold. This hearty blend incorporates cardamom and black pepper in perfect proportion, creating a spicy-sweet profile. Sweetened with mishri, khaand, jaggery, or honey, it provides comfort as winter approaches."
  },
  {
    name: "Shishir",
    color: "#A8D1E7", // Winter - ice blue
    description: "Shishir (Winter) chai is the most robust blend of the year. This deeply warming concoction features cardamom, black pepper, ginger, and long pepper, creating a powerful and aromatic brew. Sweetened with jaggery or honey, it provides the perfect warmth during the coldest months."
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
