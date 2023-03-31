import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './global.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Loader from './components/Loader';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
        <Suspense fallback={<Loader />}>
        </Suspense>
          <App />
      </React.StrictMode>
)
