import HeroBlock from '@/components/blocks/HeroBlock/HeroBlock';
import {AdvantagesBlock}  from '@/components/blocks/AdvantagesBlock/AdvantagesBlock';
import PopularLocationsBlock from '@/components/blocks/PopularLocationsBlock/PopularLocationsBlock';
import ReviewsBlock from '@/components/blocks/ReviewsBlock/ReviewsBlock';
import { LocationsGrid } from "@/components/blocks/LocationGallery/LocationGallery";

export default function HomePage() {
  return (
    <>
      <HeroBlock />
      <AdvantagesBlock />
      <PopularLocationsBlock />
      <ReviewsBlock />
      <LocationsGrid />
    </>
  );
}
