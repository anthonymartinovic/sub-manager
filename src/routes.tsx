import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Shell from "./shell/Shell";
import Error from './shell/RouteError';

const Home = React.lazy(() => import('./home/Home'))
const Subs = React.lazy(() => import('./subs/Subs'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shell />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: (
            <React.Suspense fallback={<span>Loading...</span>}>
              <Home />
            </React.Suspense>
        ),
      },
      {
        path: 'subs',
        element: (
            <React.Suspense fallback={<span>Loading...</span>}>
              <Subs />
            </React.Suspense>
        ),
      },
    ]
  },
]);

export default router;
