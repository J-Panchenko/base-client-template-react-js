import './ErrorIndicator.scss';

function ErrorIndicator() {
  return (
    <div className="error-indicator">
      <div className="error-indicator__inner">
        <h2 className="error-indicator__title title">Oops!</h2>
        <p className="error-indicator__text subtitle">Something went wrong here</p>
      </div>
    </div>
  );
}

export default ErrorIndicator;
