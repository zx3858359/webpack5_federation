import LocalButton from './Button';
import React from 'react';
import { Outlet, Link } from "react-router-dom";

/**
 * 使用 federation 联合模块
 * 可以使用懒加载 也可以不用
 */
const RemoteButton = React.lazy(() => import('app1/Button')); /** 懒加载 Button组件*/
import Footer from 'footer/start'; /** 同步加载 footer*/
import Header from 'header/start';
import utilsJs from 'header/utilsJs'; /** 同步加载 app1中的工具方法 */

const App = () => (
  <div>
    <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
      <Link to="/pageA/index">pageA</Link> | {" "}
      <Link to="/pageB/index">pageB</Link> | {" "}
      <Link to="/pageD/index">pageD</Link> | {" "}
      <Link to="/pageE/index">pageE</Link> | {" "}
    </nav>
    <h1>Bi-Directional</h1>
    <h2>App 2</h2>
    <button onClick={() => { utilsJs.add(10, 3) }}>点击调用app1中的加法</button>
    <button onClick={() => { utilsJs.del(10, 3) }}>点击调用app1中的减法</button>
    <Header msg='这是一个app2的消息'/>
    <LocalButton />
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
    <Footer />
  </div>
);

export default App;
