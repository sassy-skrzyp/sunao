import { useMemo } from 'react';
import { Container, Theme } from './settings/types';
import HeroSection from './components/generated/HeroSection';
import FeaturesSection from './components/generated/FeaturesSection';
import BenefitsSection from './components/generated/BenefitsSection';
import PricingSection from './components/generated/PricingSection';
import FooterSection from './components/generated/FooterSection';
import FloatingNavbar from './components/generated/FloatingNavbar';

let theme: Theme = 'light';
let container: Container = 'none';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  const generatedComponent = useMemo(() => {
    // THIS IS WHERE THE TOP LEVEL GENRATED COMPONENT WILL BE RETURNED!
    return (
      <>
        <FloatingNavbar />
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <PricingSection />
        <FooterSection />
      </>
    ); // %EXPORT_STATEMENT%
  }, []);

  if (container === 'centered') {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">
        {generatedComponent}
      </div>
    );
  } else {
    return generatedComponent;
  }
}

export default App;
