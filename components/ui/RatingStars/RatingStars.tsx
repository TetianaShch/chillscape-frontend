'use client'
import { useId } from "react";
import styles from './RatingStars.module.css'

type RatingStarsProps = {
    rating: number;
}

type StarProps = {
  type: "full" | "half" | "empty";
};

function Star({ type }: StarProps) {
const gradientId = useId();

if (type === "full") {
    return (
    <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
    >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
    );
}

if (type === "half") {
    return (
    <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
    >
        <defs>
        <linearGradient id={gradientId}>
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
        </linearGradient>
        </defs>
        <path
        fill={`url(#${gradientId})`}
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        />
    </svg>
    );
}

return (
    <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);
}

function RatingStars({ rating }: RatingStarsProps) {
    return (
        <div className={styles.rating}>
            {Array.from({ length: 5 }).map((_, i) => {
                let type: "full" | "half" | "empty" = "empty";
                if (rating >= i + 1) {
                    type = "full";
                } else if (rating > i) {
                    type = "half";
                }
                return <Star key={i} type={type} />;
            })}
        </div>
    );
}
export default RatingStars;