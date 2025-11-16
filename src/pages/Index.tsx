import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProductsSection } from "@/components/ProductsSection";
import { BankingLogin } from "@/components/BankingLogin";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroCarousel />
        <BankingLogin />
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
