import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import AppRouter from './AppRouter';
import { CrmAuthProvider } from './auth/CrmAuthContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CrmAuthProvider>
        <AppRouter />
      </CrmAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
