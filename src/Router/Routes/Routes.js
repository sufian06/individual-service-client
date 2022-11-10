import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Services from "../../Pages/Services/Services";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:5000')
      },
      {
        path: '/home',
        element: <Home />,
        loader: () => fetch('http://localhost:5000')
      },
      {
        path: '/services',
        element: <Services />,
        loader: () => fetch('http://localhost:5000/services')
      },
      {
        path: '/service/:id',
        element: <ServiceDetails />,
        loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
    ]
  }
])

export default router;