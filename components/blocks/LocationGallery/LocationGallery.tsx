import Image from 'next/image';
import css from './LocationGallery.module.css';

interface Props {
  image: string;
  name: string;
}

export default function LocationImg({ image, name }: Props) {
  return (
    <div className={css.wrapperLg}>
      <Image src={image} alt={name} fill className={css.imageLg} priority />{' '}
    </div>
  );
}
interface LocationCardProps extends Props {
  type: string;
  rating: number;
}

function LocationCard({ image, name, type, rating}: LocationCardProps) {
  return (
    <div className={css.cardLg}>
      <LocationImg image={image} name={name} />

      <div className={css.cardContentLg}>
        <span className={css.cardTypeLg}>{type}</span>

        <div className={css.cardRatingLg}>
          {"★".repeat(rating)}
        </div>

        <h3
          className={css.cardTitleLg}
        >
          {name}
        </h3>

        <button className={css.cardButtonLg}>
          Переглянути локацію
        </button>
      </div>
    </div>
  );
}

export function LocationGallery() {
  const locations = [
    {
      id: 1,
      name: "Сонячна Рів'єра",
      image: "/images/loc1.jpg",
      type: "Море",
      rating: 5,
    },
    {
      id: 2,
      name: "Тилігульський Спокій",
      image: "/images/loc2.jpg",
      type: "Море",
      rating: 5,
    },
    {
      id: 3,
      name: "Кінбурнська Вольниця",
      image: "/images/loc3.jpg",
      type: "Море",
      rating: 5,
    },
    {
      id: 4,
      name: "Арабатська Стрілка Ретрит",
      image: "/images/loc4.jpg",
      type: "Море",
      rating: 5,
    },
    {
      id: 5,
      name: "Лемурійські Береги",
      image: "/images/loc5.jpg",
      type: "Море",
      rating: 5,
    },
    {
      id: 6,
      name: "Полонина Тиші",
      image: "/images/loc6.jpg",
      type: "Гори",
      rating: 5,
    },
    {
      id: 7,
      name: "Дземброня: Місце Сили",
      image: "/images/loc7.jpg",
      type: "Гори",
      rating: 5,
    },
    {
      id: 8,
      name: "Верховинський Відгомін",
      image: "/images/loc8.jpg",
      type: "Гори",
      rating: 5,
    },
    {
      id: 9,
      name: "Боржавський Дзвін",
      image: "/images/loc9.jpg",
      type: "Гори",
      rating: 5,
    },
  ];

  return (
    <section className={css.section}>
      <h2 className={css.titleLg}>Усі місця відпочинку</h2>
      <div className={css.filtersLg}>
        <input
          className={css.inputLg}
          placeholder="Пошук"
        />

        <select className={css.selectLg}>
          <option>Регіон</option>
        </select>

        <select className={css.selectLg}>
          <option>Тип локації</option>
        </select>

        <button className={css.sortBtnLg}>
          Сортування
        </button>
      </div>
      <div className={css.gridLg}>
        {locations.map((loc) => (
          <LocationCard key={loc.id} {...loc} />
        ))}
      </div>

      <button className={css.loadMoreLg}>
        Показати ще
      </button>
    </section>
  );
}