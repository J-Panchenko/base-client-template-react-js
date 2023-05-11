import { ButtonHTMLAttributes, CSSProperties, DetailedHTMLProps } from 'react';
import './IconButton.scss';

interface IconButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: JSX.Element;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'solid' | 'outline' | 'ghost' | 'link' | 'unstyled';
  colorScheme?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
  styles?: CSSProperties;
  classes?: string;
  isLoading?: boolean;
  spinner?: JSX.Element;
}

function IconButton(props: IconButtonProps) {
  const {
    icon,
    styles,
    classes,
    isLoading,
    spinner,
    size = 'md',
    variant = 'solid',
    colorScheme = 'primary',
    ...buttonProps
  } = props;
  const className = `icon-button${classes ? ` ${classes}` : ''}`;

  return (
    <div className={`${size} ${colorScheme}`}>
      <button
        className={className + ` ${variant}`}
        style={styles}
        {...buttonProps}
      >
        {isLoading ? (spinner ?? spinner) : icon}
      </button>
    </div>
  );
}

export default IconButton;
