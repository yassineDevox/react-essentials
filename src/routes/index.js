import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import { AddPage, DetailsPage, EditPage, ListPage } from '../pages'

export const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route index element={<ListPage/>} />
            <Route path="/add" element={<AddPage/>} />
            <Route path="/edit/:id" element={<EditPage/>} />
            <Route path="/todos/:id" element={<DetailsPage/>} />
        </Routes>
    </Router>
  )
}
