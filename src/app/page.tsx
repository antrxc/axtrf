import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function Home() {
  return (
    <div >
      <Header />
        <GoogleAnalytics/>
      <section id="hero"></section>
      <Hero />
      <section id="services"></section>
      <LogoTicker />
      <ProductShowcase />
      <Testimonials />
      <section id="testimonials"></section>
      <CallToAction />
      <Footer />
    </div>
  );
}
