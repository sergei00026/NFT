import { HeroSection } from '@/widgets/hero-section/ui/heroSection/HeroSection';
import { WeeklySection } from '@/widgets/weekly-section/ui/weeklySection/WeeklySection';
import { PromoBanner } from '@/widgets/promo-banner/ui/promoBanner/PromoBanner';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WeeklySection />
      <PromoBanner />
    </main>
  );
}
