import './index.css';

import { StrictMode } from 'react';

import { SnackbarProvider } from 'notistack';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnackbarProvider>
    <App />
    </SnackbarProvider>
  </StrictMode>,
)
