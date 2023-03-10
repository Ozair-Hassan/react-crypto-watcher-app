import './App.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Header from './ui/Header'
import Search from './ui/Search'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CoinPage from './Pages/CoinPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/coin/:id"
              element={<CoinPage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
