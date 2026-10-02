import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ApplyForm } from "@/components/ApplyForm";
import { Featured } from "@/components/Featured";
import { BadgeSection } from "@/components/BadgeSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <ApplyForm />
        <Featured />
        <BadgeSection />
      </main>
      <Footer />
    </>
  );
}
