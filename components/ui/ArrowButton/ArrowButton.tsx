import { forwardRef } from 'react';
import styles from './ArrowButton.module.css';
import { Icon } from '@/components/ui/Icon/Icon';

type ArrowButtonProps = {
  direction: 'prev' | 'next';
  ariaLabel: string;
  onClick?: () => void;
  disabled?: boolean;
};

const ArrowButton = forwardRef<HTMLButtonElement, ArrowButtonProps>(
  (props, ref) => {
    const { direction, ariaLabel, onClick, disabled = false } = props;
    const iconName = direction === 'prev' ? 'icon-arrow-back' : 'icon-arrow-forward';

    return (
      <button
        type="button"
        aria-label={ariaLabel}
        className={styles.button}
        onClick={onClick}
        disabled={disabled}
        ref={ref}
      >
        <Icon name={iconName} className={styles.icon} aria-hidden="true" />
      </button>
    );
  }
);

ArrowButton.displayName = 'ArrowButton';
export default ArrowButton;