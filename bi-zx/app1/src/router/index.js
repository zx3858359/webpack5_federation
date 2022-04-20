import React from 'react';
const App = React.lazy(() => import('../App'));
const PageA = React.lazy(() => import('../pages/pageA'));
const PageB = React.lazy(() => import('../pages/pageB'));
const PageC = React.lazy(() => import('../pages/pageC'));
/** 正确的配置 关键在于 App PageA 等必须写成 标签形式 <PageA />  */
const routes = [
    {
      path: "/",
      element: <App />,
    },
    { path: "pageA/index", element: <PageA /> },
    { path: "pageB/index", element: <PageB /> },
    { path: "pageC/index", element: <PageC /> },
  ]

export default routes