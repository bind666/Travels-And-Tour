
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Luxury from "./pages/Luxury";
import Cruise from "./pages/Cruise";
import Wildlife from "./pages/Wildlife";
import India from "./pages/India";
import International from "./pages/International";
import WeekendGetaways from "./pages/WeekendGetaways";
import Honeymoon from "./pages/Honeymoon";
import MICE from "./pages/MICE";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import TestimonialsPage from "./pages/TestimonialsPage";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/luxury" element={<Luxury />} />
          <Route path="/cruise" element={<Cruise />} />
          <Route path="/wildlife" element={<Wildlife />} />
          <Route path="/india" element={<India />} />
          <Route path="/international" element={<International />} />
          <Route path="/weekend-getaways" element={<WeekendGetaways />} />
          <Route path="/honeymoon" element={<Honeymoon />} />
          <Route path="/mice" element={<MICE />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
