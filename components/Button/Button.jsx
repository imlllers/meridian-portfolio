import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
}) {
  const className = [
    styles.button,
    variant === 'secondary' ? styles.secondary : styles.primary,
    size === 'sm' ? styles.sm : styles.md,
  ].join(' ');

  return (
    <button type={type} className={className} onClick={onClick}>
      <span>{children}</span>
      <img src="/arrow.svg" alt="" className={styles.icon} aria-hidden="true" />
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
};

export default Button;
