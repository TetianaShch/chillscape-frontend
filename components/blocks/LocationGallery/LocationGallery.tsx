'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import css from './LocationGallery.module.css';

interface Location {
  _id: string;
  name: string;
  image: string;
  locationType: string;
  rate: number;
}

function LocationImg({ image, name }: { image: string; name: string }) {
  return (
    <div className={css.wrapperLg}>
      <Image src={image} alt={name} fill className={css.imageLg} priority />
    </div>
  );
}

function LocationCard({
  image,
  name,
  type,
  rating,
}: {
  image: string;
  name: string;
  type: string;
  rating: number;
}) {
  return (
    <div className={css.cardLg}>
      <LocationImg image={image} name={name} />

      <div className={css.cardContentLg}>
        <span className={css.cardTypeLg}>{type}</span>

        <div className={css.cardRatingLg}>
          {'★'.repeat(Math.round(rating))}
        </div>

        <h3 className={css.cardTitleLg}>{name}</h3>

        <button className={css.cardButtonLg}>
          Переглянути локацію
        </button>
      </div>
    </div>
  );
}

export default function LocationGallery() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/locations');
        const data = await res.json();

        setLocations(data.locations); 
      } catch (error) {
        console.error('Упс, щось пішло не так..', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  if (loading) return <p>Завантаження...</p>;

  return (
    <section className={css.section}>
      <h2 className={css.titleLg}>Усі місця відпочинку</h2>

      <div className={css.gridLg}>
        {locations.map((loc) => (
          <LocationCard
            key={loc._id}
            image={loc.image}
            name={loc.name}
            type={loc.locationType}
            rating={loc.rate}
          />
        ))}
      </div>
    </section>
  );
}