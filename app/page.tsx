import Navbar from "./components/navbar/navBar";
import HeroBox from "./components/heroBox/heroBox";
import AboutSection from "./components/AboutSection";
import OurServices from "./components/ourServices";
import ClientFeedback from "./components/clientFeedback";
import InnovativeSolutions from "./components/InnovativeSolutions";
import Footer from "./components/footer";
import MyComponent from "./components/myComponent";
import CTA from "./components/CTA";
import TrustedBy from "./components/trustedBy";
import ImpactStats from "./components/impactStats";
import BlogSection from "./components/blogSection";

export default function Home() {
  return (
    <main>
      
      <Navbar/>
      
      <MyComponent>
      <HeroBox/>
      </MyComponent>

      <MyComponent>
      <AboutSection/>
      </MyComponent>

      <MyComponent>
      <OurServices/>
      </MyComponent>

      <MyComponent>
      <ClientFeedback/>
      </MyComponent>

      <MyComponent>
      <InnovativeSolutions/>
      </MyComponent>

      <MyComponent>
        <CTA/>
      </MyComponent>
      <MyComponent>
        <TrustedBy/>
      </MyComponent>
      <MyComponent>
        <ImpactStats/>
      </MyComponent>
      <MyComponent>
        <BlogSection/>
      </MyComponent>

      <MyComponent>
      <Footer/>
      </MyComponent>
      
    </main>
  );
}
