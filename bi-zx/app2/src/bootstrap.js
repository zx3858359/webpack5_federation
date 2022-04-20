import App from './App';
import React from 'react';
import myRoutes from './router/index.js';
import { createRoot } from 'react-dom/client';

import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import app1Route from 'app1Route/route'; /** 同步加载 app1中的路由 */
const allRouter = [
  ...app1Route.filter(item => item.path != '/'),
  ...myRoutes
]
const container = document.getElementById('root')
const root = createRoot(container);
root.render(
  <HashRouter>
     <React.Suspense fallback="Loading Button">
        <Routes>
          {
            allRouter.map(item => (
              <Route path={item.path} element={item.element} key={item.path}/>
            ))
          }
        </Routes>
     </React.Suspense>
  </HashRouter>);