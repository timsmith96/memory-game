import React from 'react';
import ReactDOM from 'react-dom/client';
import MemoryApplication from './components/MemoryApplication';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MemoryApplication />
  </React.StrictMode>
);
