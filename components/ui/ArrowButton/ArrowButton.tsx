import styles from './ArrowButton.module.css';

type ArrowButtonProps = {
    direction: 'prev' | 'next';
    ariaLabel: string;
    onClick: () => void;
    disabled?: boolean;
}

function ArrowButton({
    direction,
    ariaLabel,
    onClick,
    disabled = false,
}: ArrowButtonProps) {
    return (
        <button
            type="button"
            aria-label={ariaLabel}
            className={styles.button}
            onClick={onClick}
            disabled={disabled}
        >
            <svg
                className={`${styles.icon} ${direction === 'prev' ? styles.iconPrev : ''
                    }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
            </svg>
        </button>
    );
}

export default ArrowButton;