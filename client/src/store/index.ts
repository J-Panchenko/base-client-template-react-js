// Add React State Management Libraries. Prefer Redux Toolkit or Zustand.

const API = process.env.NODE_ENV === 'development' ?
  '' : (process.env.REACT_APP_API || '');
const config = { withCredentials: true };

export {
  API,
  config,
};
