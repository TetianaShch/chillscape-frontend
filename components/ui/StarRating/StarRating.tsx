'use client';

import { useState } from 'react';
import styles from './StarRating.module.css';

interface Props {
  value: number;
  size?: number;
  readonly?: boolean;
  onChange?: (rate: number) => void;
}

export default function StarRating({
  value,
  size = 24,
  readonly = true,
  onChange,
}: Props) {
  const [hovered, setHovered] = useState<number | null>(null);

  const displayed = hovered ?? value;

  return (
    <div className={styles.wrapper}>
      {[1, 2, 3, 4, 5].map((i) => {
        const diff = displayed - (i - 1);

        const icon =
          diff >= 1
            ? 'icon-star-filled'
            : diff >= 0.5
            ? 'icon-star-half'
            : 'icon-star-rate';

        return (
          <svg
            key={i}
            width={size}
            height={size}
            onMouseEnter={() => !readonly && setHovered(i)}
            onMouseLeave={() => !readonly && setHovered(null)}
            onClick={() => !readonly && onChange?.(i)}
            className={!readonly ? styles.starActive : styles.star}
          >
            <use href={`/icons.svg#${icon}`} />
          </svg>
        );
      })}
    </div>
  );
}
