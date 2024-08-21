import { Spotlight } from '@/components/ui/Spotlight';
import HeroSection from '@/app/dashboard/_components/HeroSection';
export default function Home() {
  return (
    <main className="bg-black ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <HeroSection></HeroSection>
      
    </main>
  );
}
