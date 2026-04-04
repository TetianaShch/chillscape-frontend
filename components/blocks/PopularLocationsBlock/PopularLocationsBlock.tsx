'use client';

import LocationCard from '@/components/cards/LocationCard/LocationCard';
import ArrowButton from '@/components/ui/ArrowButton/ArrowButton';
import css from '@/components/blocks/PopularLocationsBlock/PopularLocationsBlock.module.css';

import { useQuery } from '@tanstack/react-query';
import { getLocations } from '@/lib/clientApi';
import { Loader } from '@/components/ui/Loader/Loader';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Button } from '@/components/ui/Button/Button';

export default function PopularLocations() {
  const { data: locations = [], isLoading, isError } = useQuery({
    queryKey: ['locations'],
    queryFn: getLocations,
  });

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  if (isLoading) return <Loader />;
  if (isError) return <h2>Error</h2>;

  return (
    <section suppressHydrationWarning>
      <div className={css.locHeader}>
        <h2 className={css.locTitle}>Популярні локації</h2>
        <Button variant="primary" className={css.allLocBtn}>Всі локації</Button>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 3,
          },
        }}
      >
        {locations.map((location) => (
          <SwiperSlide key={location._id}>
            <div className={css.locationCard}>
              <LocationCard
                id={location._id}
                src={location.image}
                alt={location.name}
                category={location.locationType || location.typeName}
                name={location.name}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={css.btnContainer}>
        <ArrowButton
          ref={prevRef}
          direction="prev"
          ariaLabel="Previous locations"
        />
        <ArrowButton
          ref={nextRef}
          direction="next"
          ariaLabel="Next locations"
        />
      </div>
    </section>
  );
}