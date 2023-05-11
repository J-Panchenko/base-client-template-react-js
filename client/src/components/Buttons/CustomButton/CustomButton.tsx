import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import './CustomButton.scss';

interface CustomButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'solid' | 'outline' | 'ghost' | 'link' | 'unstyled';
  colorScheme?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
  classes?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  isLoading?: boolean;
  spinnerPlacement?: 'left' | 'right';
  spinner?: JSX.Element;
  loadingText?: string;
}

function CustomButton(props: CustomButtonProps) {
  const {
    text,
    leftIcon,
    rightIcon,
    classes,
    size = 'md',
    variant = 'solid',
    colorScheme = 'primary',
    isLoading,
    spinnerPlacement = 'left',
    spinner,
    loadingText,
    ...buttonProps
  } = props;
  const className = `custom-button${classes ? ` ${classes}` : ''}`;
  const iconLeft = leftIcon ? leftIcon : null;
  const iconRight = rightIcon ? rightIcon : null;
  const buttonContent = (
    <>
      {iconLeft}
      <span className="custom-button__text">{text}</span>
      {iconRight}
    </>
  );
  const loadingContent = (
    <>
      {spinnerPlacement === 'left' ? (
        <>{spinner ? spinner : iconLeft}</>
      ) : null}
      <span className="custom-button__text">
        {loadingText ? loadingText : text}
      </span>
      {spinnerPlacement === 'right' ? (
        <>{spinner ? spinner : iconRight}</>
      ) : null}
    </>
  );

  return (
    <div className={`${size} ${colorScheme}`}>
      <button
        {...buttonProps}
        className={className + ` ${variant}`}
      >
        {isLoading ? loadingContent : buttonContent}
      </button>
    </div>
  );
}

export default CustomButton;
