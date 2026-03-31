import type { Review } from '@/components/blocks/ReviewsBlock/ReviewsBlock';

export const fetchReviews = async (): Promise<Review[]> => [
  {
    id: '1',
    rating: 5,
    text: 'Неймовірне місце для перезавантаження. Природа просто вау!',
    author: 'Олена Коваль',
    locationType: 'Море',
  },
  {
    id: '2',
    rating: 4,
    text: 'Тихо, спокійно, дуже атмосферно. Обовʼязково повернусь.',
    author: 'Ігор Петров',
    locationType: 'Гори',
  },
  {
    id: '3',
    rating: 5,
    text: 'Ідеальне місце для відпочинку від міської метушні.',
    author: 'Марія Шевченко',
    locationType: 'Ліс',
  },
  {
    id: '4',
    rating: 5,
    text: 'Неймовірне місце для перезавантаження. Природа просто вау!',
    author: 'Олена Коваль',
    locationType: 'Море',
  },
  {
    id: '5',
    rating: 4,
    text: 'Тихо, спокійно, дуже атмосферно. Обовʼязково повернусь.',
    author: 'Ігор Петров',
    locationType: 'Гори',
  },
  {
    id: '6',
    rating: 5,
    text: 'Ідеальне місце для відпочинку від міської метушні.',
    author: 'Марія Шевченко',
    locationType: 'Ліс',
  },
];