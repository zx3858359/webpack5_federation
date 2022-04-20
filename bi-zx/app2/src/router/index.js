import React from 'react';
const App = React.lazy(() => import('../App'));
const PageD = React.lazy(() => import('../pages/pageD'));
const PageE = React.lazy(() => import('../pages/pageE'));
/** 正确的配置 关键在于 App PageA 等必须写成 标签形式 <PageA />  */
const routes = [
    {
      path: "/",
      element: <App />,
    },
    { path: "pageD/index", element: <PageD /> },
    { path: "pageE/index", element: <PageE /> },
  ]

export default routes