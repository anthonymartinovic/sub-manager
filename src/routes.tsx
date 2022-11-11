import { createBrowserRouter } from "react-router-dom";
import Shell from "./shell/Shell";
import Error from './shell/RouteError';
import Home from './home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shell />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home buttonText="Home" />,
      },
      {
        path: 'subscriptions',
        element: <Home buttonText="Subscriptions" />,
      }
    ]
  },
]);

export default router;
