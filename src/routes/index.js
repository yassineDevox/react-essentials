import React from 'react'
import { BrowserRouter as Router, Routes,Route ,Link} from 'react-router-dom'
import { AddPage, DetailsPage, EditPage, ListPage } from '../pages'

export const AppRoutes = () => {
  return (
    <Router>
       <nav>
        <Link to="">My Todos</Link> |{" "}
        <Link to="add">New Todo</Link>
      </nav>
        <Routes>
            <Route index element={<ListPage/>} />
            <Route path="/add" element={<AddPage/>} />
            <Route path="/edit/:id" element={<EditPage/>} />
            <Route path="/details/:id" element={<DetailsPage/>} />
        </Routes>
    </Router>
  )
}
