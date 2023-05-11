import { ReactComponent as Warning } from 'assets/images/alertCircle.svg';
import { error } from 'data';
import './ErrorMessage.scss';

interface ErrorMessageProps {
  message?: string;
}

function ErrorMessage({ message = error.unknown }: ErrorMessageProps) {
  return (
    <p className="error-message">
      <Warning />
      <span className="error-message__text">
        {message ? message : error.unknown}
      </span>
    </p>
  );
}

export default ErrorMessage;
