import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Contact from './Component/Contact/Contact.jsx'
import User from './Component/User/User.jsx'
import Github, { githunInfoLoader } from './Component/Github/Github.jsx'


// const router =createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout />,
//     children:[
//       {
//         path:"",
//         element: <Home />
//       },{
//         path:'about',
//         element: <About />
//       },
//       {
//         path:'contact',
//         element:<Contact />
//       }
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      path='/github' 
      element={<Github/>}
       loader={githunInfoLoader} 
      />
    </Route>

  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
