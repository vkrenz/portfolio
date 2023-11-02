import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
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
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
        </Layout>
      </DarkModeProvider>
    </Router>
  </React.StrictMode>,
)
