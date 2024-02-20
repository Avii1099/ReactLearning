import React from 'react'
import ReactDOM from 'react-dom/client.js'
import App from './App.jsx'
// import Counter from './components/counter.jsx'
import './index.css'

// import {
//   createBrowserRouter,  Link, RouterProvider
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/hey",
//     element: (
//       <div>
//         <h1>Hello World</h1>
//         <Link to="about">About Us</Link>
//       </div>
//     ),
//   },
//   {
//     path: "about",
//     element: <div>About</div>,
//   },
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />    
  </React.StrictMode>,

  // <RouterProvider router={router} />
)
