import App from 'App';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'components';
import { createRoot } from 'react-dom/client';
import reportWebVitals from 'reportWebVitals';
import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>
);

reportWebVitals();
