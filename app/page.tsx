import Navbar from "./components/navbar/navBar";
import AboutSection from "./components/AboutSection";
import MyComponent from "./components/myComponent";
import FaqSection from "./components/faq/FaqSection";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeatureSection";
import PersonasTabsSection from "./components/PersonasTabsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ImpactStatsSection from "./components/ImpactStatsSection";
import CtaLeadFormSection from "./components/CtaLeadFormSection";
import FeatureGridSection from "./components/FeatureGridSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/footer";



export default function Home() {
  return (
    <main>
      
      <Navbar/>
      
      <MyComponent>
        <HeroSection/>
      </MyComponent>
      
      

      <MyComponent>
        <AboutSection />
      </MyComponent>
      
      
    

      <MyComponent>
        <FeaturesSection/>
      </MyComponent>
      
      
      
      <MyComponent>
        <PersonasTabsSection />
      </MyComponent>
    
      <MyComponent>
        <TestimonialsSection/>
      </MyComponent>
      
      
      
      <MyComponent>
        <ImpactStatsSection />
      </MyComponent>


      
      <MyComponent>
        <CtaLeadFormSection/>

      </MyComponent>
      

      
      
      
      <MyComponent>
        
        <FeatureGridSection/>
      </MyComponent>
      <MyComponent>
        <PricingSection />

      </MyComponent>
      <MyComponent>
        <FaqSection/>

      </MyComponent>
      <MyComponent>
        <Footer />

      </MyComponent>

      
      
      
      

    
      
      

      
      

     
      
      

    

      

      
      
    </main>
  );
}
