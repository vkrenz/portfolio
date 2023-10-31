import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Layout from './components/Layout.jsx'

import { DarkModeProvider } from './DarkModeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <DarkModeProvider>
        <Layout>
            <App />
        </Layout>
      </DarkModeProvider>
    </Router>
  </React.StrictMode>,
)
