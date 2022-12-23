import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import ScrollToTop from './ScrollToTop'

/*************
    LayOut
*************/
import DefaultLayout from '../layout/DefaultLayout'

/*************
  Pages
*************/
import Index from '../pages'
import NotFound from '../pages/NotFound'

const Routers = () => {
  const publicRoutes = [
    { name: 'Index', path: '/', element: Index },
    { name: '404', path: '*', element: NotFound },
  ]
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<DefaultLayout />}
        >
          {
            publicRoutes.map((route, key) => (
              <Route
                key={key}
                path={route.path}
                element={<route.element />}
              />
            ))
          }
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers