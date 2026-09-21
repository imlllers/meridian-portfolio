import PropTypes from 'prop-types';
import { Button as BootstrapButton } from 'react-bootstrap';

function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
}) {
  const bootstrapSize = size === 'sm' ? 'sm' : undefined;
  const bootstrapVariant = variant === 'secondary' ? 'outline-secondary' : 'primary';

  return (
    <BootstrapButton
      type={type}
      variant={bootstrapVariant}
      size={bootstrapSize}
      onClick={onClick}
    >
      {children}
    </BootstrapButton>
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
