/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/main'
import { Favourites } from './pages/favourites'
import { Category } from './pages/category'
import {Login} from './pages/login'
import { ProtectedRoute } from './components/protected-route'
import { Register } from './pages/register'
import { NotFound } from './pages/page-not-found'

export const AppRoutes = ({token, setToken }) => {
  return (
    <Routes>

      <Route path="/login" element={<Login setToken={setToken} />}></Route>

      <Route path="/" element={<ProtectedRoute token={token} ><MainPage/> </ProtectedRoute>} />
      <Route path='/favourites' element={<ProtectedRoute token={token} ><Favourites/> </ProtectedRoute>}></Route>
      <Route path="/category/:id" element={<ProtectedRoute token={token} ><Category/> </ProtectedRoute>} />

      <Route path="/register" element={<Register />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}