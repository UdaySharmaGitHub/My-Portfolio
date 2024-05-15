import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route,RouterProvider, createBrowserRouter,createRoutesFromElements  } from 'react-router-dom'
import App from './App.jsx'
import Blogs from './pages/Blogs/Blogs.jsx'
import About from './pages/About/About.jsx'
import Resume from './pages/Resume/Resume.jsx'
import Portfolio from './pages/Portfolio/Portfolio.jsx'
import Contact from './pages/Contact/Contact.jsx'


// const router = createBrowserRouter([
//   {
//     path:"/",
//   element: <App/>,
//   children:[
//     {
//       path: "/",
//       element:<About/>,
//     },
//     {
//       path:"/blogs",
//       element:<Blogs/>,
//     }
//   ]
// },
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/My-Portfolio/' element={<App/>}>
        <Route path='/My-Portfolio/' element={<About/>}/>
        <Route path='/My-Portfolio/resume' element={<Resume/>}/>
        <Route path='/My-Portfolio/blogs' element={<Blogs/>}/>
        <Route path='/My-Portfolio/portfolio' element={<Portfolio/>}/>
        <Route path='/My-Portfolio/contact' element={<Contact/> }/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
