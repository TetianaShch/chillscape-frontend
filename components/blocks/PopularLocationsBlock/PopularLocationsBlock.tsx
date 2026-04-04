'use client';

import LocationCard from '@/components/cards/LocationCard/LocationCard';
import ArrowButton from '@/components/ui/ArrowButton/ArrowButton';
import css from '@/components/blocks/PopularLocationsBlock/PopularLocationsBlock.module.css';

import { useQuery } from '@tanstack/react-query';
import { getLocations } from '@/lib/clientApi';
import { Loader } from '@/components/ui/Loader/Loader';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { useRef, useState } from 'react';
import { Location } from '@/types/locations';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { Button } from '@/components/ui/Button/Button';

export default function PopularLocations() {
  const {
    data: locations = [],
    isLoading,
    isError,
  } = useQuery<Location[]>({
    queryKey: ['locations'],
    queryFn: getLocations,
  });

  const swiperRef = useRef<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavigationState = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h2>Не вдалося завантажити локації. Спробуйте пізніше.</h2>;
  }

  return (
    <section className={css.section} suppressHydrationWarning>
      <div className="container">
        <div className={css.locHeader}>
          <h2 className={css.locTitle}>Популярні локації</h2>

          <Link href="/locations">
            <Button variant="primary" className={css.allLocBtn}>
              Всі локації
            </Button>
          </Link>
        </div>

        <Swiper
          modules={[Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateNavigationState(swiper);
          }}
          onSlideChange={updateNavigationState}
          onResize={updateNavigationState}
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={24}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
        >
          {locations.map((location) => (
            <SwiperSlide key={location._id}>
              <div className={css.locationCard}>
                <LocationCard
                  location={{
                    id: location._id,
                    name: location.name,
                    imageUrl: location.image,
                    type: location.locationType || location.typeName,
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={css.btnContainer}>
          <ArrowButton
            direction="prev"
            ariaLabel="Previous locations"
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
          />
          <ArrowButton
            direction="next"
            ariaLabel="Next locations"
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
          />
        </div>
      </div>
    </section>
  );
}