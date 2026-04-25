import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import Home from './Component/Header/Footer/Home/Home';
import Layout from './Layout';
import About from './Component/Header/Footer/Home/About/Contactus/About';
import Contact from './Component/Header/Contactus/Contactus';
import Signup from './Component/Header/Signup/Signup';
import Login from './Component/Header/Login/Login';
import EventAndDining from './Component/Header/Event/Event';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path:'contactus',
//         element:<Contactus/>
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About/>} />
    <Route path="contact" element={<Contact />} />
    <Route path="signup" element={<Signup />} />
    <Route path="login" element={<Login />} />
     <Route path="event" element={<EventAndDining />} />
    {/* <Route path="user/:userid" element={<User />} /> */}
    {/* <Route
      path="github"
      element={<Github />}
      loader={githubInfoLoader}
    /> */}
  </Route>
));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)