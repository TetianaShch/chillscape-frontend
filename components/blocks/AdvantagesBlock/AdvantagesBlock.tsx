import styles from './AdvantagesBlock.module.css';
import { Icon } from '@/components/ui/Icon/Icon';

const advantages = [
  {
    id: 1,
    icon: 'icon-check',
    title: 'Реальні відгуки',
    text: 'Користувачі діляться чесними враженнями, щоб ви робили правильний вибір.',
  },
  {
    id: 2,
    icon: 'icon-filter',
    title: 'Зручні фільтри',
    text: 'Шукайте за типом локації, регіоном, наявністю зручностей та іншими критеріями.',
  },
  {
    id: 3,
    icon: 'icon-users',
    title: 'Спільнота мандрівників',
    text: 'Додавайте власні улюблені місця та діліться своїми неймовірними знахідками.',
  },
];

export const AdvantagesBlock = () => {
  return (
    <section className={styles.advantages}>
      <div className="container">
        <h2 className={styles.title}>Ключові переваги</h2>

        <div className={styles.grid}>
          {advantages.map((item) => (
            <div key={item.id} className={styles.card}>
              <Icon name={item.icon} className={styles.icon} />

              <h3 className={styles.cardTitle}>{item.title}</h3>

              <p className={styles.text}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};