import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { CompanyCarousel } from "@/components/home/CompanyCarousel";
import { Features } from "@/components/home/Features";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CursorBlob } from "@/components/ui/CursorBlob";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <CursorBlob />
      {/* Gradient background */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-zinc-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-b from-zinc-950/0 via-zinc-950/50 to-zinc-950/100" />

      <Header />
      <main>
        <Hero />
        <CompanyCarousel />
        <HowItWorks />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
