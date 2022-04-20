import LocalButton from './Button';
import React from 'react';
import { Outlet, Link } from "react-router-dom";

const RemoteButton = React.lazy(() => import('app2/Button'));
console.log('APP')
const App = () => (
  <div>
    <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
      <Link to="/pageA/index">pageA</Link> |{" "}
      <Link to="/pageB/index">pageB</Link> |{" "}
      <Link to="/pageC/index">pageC</Link> |{" "}
    </nav>
    <h1>Bi-Directional</h1>
    <h2>App 2</h2>
    <LocalButton />
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
  </div>
);

export default App;
