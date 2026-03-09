import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlobalSchema } from "@/components/GlobalSchema";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <GlobalSchema />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
