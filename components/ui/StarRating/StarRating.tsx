'use client';

import dynamic from 'next/dynamic';
import styles from './StarRating.module.css';

const Rating = dynamic(
  () => import('react-simple-star-rating').then((m) => m.Rating),
  { ssr: false }
);

interface Props {
  value: number;
  readonly?: boolean;
  size?: number;
  onChange?: (rate: number) => void;
}

export default function StarRating({
  value,
  readonly = true,
  size = 20,
  onChange,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <Rating
        key={value}
        initialValue={value}
        readonly={readonly}
        size={size}
        allowFraction={false}
        onClick={onChange}
        fillColor="var(--text-black)"
        emptyColor="transparent"
        SVGstrokeColor="var(--text-black)"
        SVGstorkeWidth={1.5}
      />
    </div>
  );
}
