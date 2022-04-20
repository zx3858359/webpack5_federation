import App from './App';
import React from 'react';
import myRoutes from './router/index.js';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
const container = document.getElementById('root')
const root = createRoot(container);
console.log(myRoutes)
root.render(
  <HashRouter>
    <React.Suspense fallback="Loading Button">
      <Routes>
        {
          myRoutes.map(item => (
            <Route path={item.path} element={item.element} key={item.path}/>
          ))
        }
      </Routes>
    </React.Suspense>
  </HashRouter>);
