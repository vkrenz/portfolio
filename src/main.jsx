import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css'
import Layout from './components/Layout.jsx'

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

import { DarkModeProvider } from './DarkModeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <DarkModeProvider>
        <Layout>
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
        </Layout>
      </DarkModeProvider>
    </Router>
  </React.StrictMode>,
)
