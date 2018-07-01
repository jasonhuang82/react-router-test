import React, { Component } from 'react';
import {
  Link,
  Route,
  Switch
} from "react-router-dom";
import './css.scss';

const Member = (props) => (
  <div>Member</div>
);

const Product = (props) => (
  <div>Product</div>
);

const Service = (props) => <div>Service</div>;

const Default = () => <div>Please click link</div>;
const ErrorAlert = () => <div>404 !! This is not correct url </div>
const About = ({match}) => {
  console.log("match", match);
  
  return (
    <div>
      {/* 巢狀LINK 區塊 */}
      <ul>
        <li><Link to={`${match.path}/service`} >service</Link></li>
        <li><Link to={`${match.path}/product`} >product</Link></li>
        <li><Link to={`${match.path}/Member`}  >Member</Link></li>
      </ul>
      {/* 巢狀路由顯示區塊 */}
      <section>
        <Switch>
          <Route path={`${match.path}`} exact component={Default} />
          <Route path={`${match.path}/service`} component={Service} />
          <Route path={`${match.path}/product`} component={Product} />
          <Route path={`${match.path}/Member`} component={Member} />
          <Route component={ErrorAlert} />
        </Switch>
      </section>
    </div>
  );
};
/* 
    router 需要顯示對應路由的區塊一定要給Route 作為，切換路由抽換組件的區塊

    react-router 匹配路由方式是從最前面開始只要path中有對應到的組件都會被，
    render 出來 EX: path="/about/member" ，
    會從開頭 / 匹配到所以 / 的組件會印出，/about, /about/member 同理，
    所以最後結果會是 / && /about && /about/member 所有組件都被印出
    而解決方式是使用 exact 去做完全匹配也是 路由必須完全相符來會render該組件
    ex: 在 path="/" 組件上 exact 的話，就會只在首頁 / 時才會出現組件，
    若為 /about or /about/member 則部會出現 path="/" 的組件，
    通常用於像 path="/" 根目錄首頁 path 可能會跟人家衝到的，但在導向其他頁時又不希望它存在
    就像是根目錄會有最新消息出現，但跑到 /about 頁面時是要出現店家資料，不需要出現根目錄的東西
    就需要用 exact 去做完全比對，(有關係的組件才做聰明匹配，沒關係就用嚴格批配)

    若是有 404 頁面也就是user 輸入不存在網頁，然後要導向一個 404 頁面
    當 Route 沒有 path props 時，則會在url都沒有匹配到時，render 這個組件
    而這個防呆路由匹配目前需搭配 router -v4 <Switch> 組件去做smart match
    原理待確定
*/

export default About;
