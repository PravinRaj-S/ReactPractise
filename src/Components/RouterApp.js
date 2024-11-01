import { Layout } from "../Pages/Layout"
import { Home } from "../Pages/Home"
import { Blog } from "../Pages/Blog"
import { Contact } from "../Pages/Contact"
import { NoPage } from "../Pages/NoPage"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export const RouterApp = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='home' element={<Home />}></Route>
            <Route path='blog' element= {<Blog />}></Route>
            <Route path='contact' element= {<Contact />}></Route>
            <Route path='*' element={<NoPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }