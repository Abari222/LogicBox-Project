import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ServicePortfolio from './Page/ServicePortfolio/ServicePortfolio';
import OurOffices from './Page/OurOffices/OurOffices';
import FAQs from './Page/FAQs/FAQs';
import AboutUs from './Page/AboutUs/AboutUs';
import ContactUs from './Page/ContactUs/ContactUs';
import Layout from './Layout/Layout';
import AuthLayout from './AuthLayout/AuthLayout';
import Login from './Page/Login/Login';
import SignUp from './Page/Signup/Signup';
import { Children } from 'react';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    Children:[
      {
        path: "/",
        element: <ServicePortfolio/>
      },
      {
        path: "ourOffices",
        element: <OurOffices/>
      },
      {
        path: "faqs",
        element: <FAQs/>
      },
      {
        path: "aboutUs",
        element: <AboutUs/>
      },
      {
        path: "contactUs",
        element: <ContactUs/>
      },

      {
        path:"/auth",
        element: <AuthLayout/>,
        Children: [
          {
            path:"login",
            element:<Login/>
          },
          {
            path:"signUp",
            element:<SignUp/>
          }
        ]
      }
    ]
  }
]);

function App() {

  return(
    <RouterProvider router={router} />
  )
}

export default App