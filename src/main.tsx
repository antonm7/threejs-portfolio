import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './global.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </React.StrictMode>
)
