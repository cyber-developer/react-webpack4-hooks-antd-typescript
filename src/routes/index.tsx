import React from 'react';
import { renderRoutes } from 'react-router-config';

import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';

const Root = ({ route }: any) => (
  <div className='main'>
    {/* <h1>Root</h1> */}
    {/* child routes won't render without this */}
    {renderRoutes(route.routes, { name: "Dashboard" })}
  </div>
);

// const Home = ({ route }: any) => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );

// const Child = ({ route }: any) => (
//   <div>
//     <h2>Child</h2>
//     {/* child routes won't render without this */}
//     {renderRoutes(route.routes, { someProp: "these extra props are optional" })}
//   </div>
// );

// const GrandChild = ({ someProp }: any) => (
//   <div>
//     <h3>Grand Child</h3>
//     <div>{someProp}</div>
//   </div>
// );

const routes = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: Dashboard
      },
      {
        path: "/login",
        exact: true,
        component: Login
      },
      {
        component: NotFound
      }
      // {
      //   path: "/child/:id",
      //   component: Child,
      //   routes: [
      //     {
      //       path: "/child/:id/grand-child",
      //       component: GrandChild
      //     }
      //   ]
      // }
    ]
  }
];

export default routes;
