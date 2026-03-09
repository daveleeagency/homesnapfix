import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import DiagnosePage from "./pages/DiagnosePage";
import ResultsPage from "./pages/ResultsPage";
import ProsPage from "./pages/ProsPage";
import ReportPage from "./pages/ReportPage";
import DIYHub from "./pages/DIYHub";
import DIYArticle from "./pages/DIYArticle";
import MaintenanceCalendar from "./pages/MaintenanceCalendar";
import NewsletterPage from "./pages/NewsletterPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";
import DisclaimerPage from "./pages/legal/DisclaimerPage";
import PrivacyPage from "./pages/legal/PrivacyPage";
import TermsPage from "./pages/legal/TermsPage";
import RoofingHub from "./pages/issues/RoofingHub";
import PlumbingHub from "./pages/issues/PlumbingHub";
import HVACHub from "./pages/issues/HVACHub";
import ElectricalHub from "./pages/issues/ElectricalHub";
import MoldMoistureHub from "./pages/issues/MoldMoistureHub";
import FoundationCracksHub from "./pages/issues/FoundationCracksHub";
import ExteriorDamageHub from "./pages/issues/ExteriorDamageHub";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/diagnose" element={<DiagnosePage />} />
          <Route path="/results/:analysisId" element={<ResultsPage />} />
          <Route path="/pros" element={<ProsPage />} />
          <Route path="/report/:analysisId" element={<ReportPage />} />
          <Route path="/diy" element={<DIYHub />} />
          <Route path="/diy/:slug" element={<DIYArticle />} />
          <Route path="/issues/roofing" element={<RoofingHub />} />
          <Route path="/issues/plumbing" element={<PlumbingHub />} />
          <Route path="/issues/hvac" element={<HVACHub />} />
          <Route path="/issues/electrical" element={<ElectricalHub />} />
          <Route path="/issues/mold-moisture" element={<MoldMoistureHub />} />
          <Route path="/issues/foundation-cracks" element={<FoundationCracksHub />} />
          <Route path="/issues/exterior-damage" element={<ExteriorDamageHub />} />
          <Route path="/maintenance-calendar" element={<MaintenanceCalendar />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/legal/disclaimer" element={<DisclaimerPage />} />
          <Route path="/legal/privacy" element={<PrivacyPage />} />
          <Route path="/legal/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
