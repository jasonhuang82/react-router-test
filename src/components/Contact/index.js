import React, { Component } from 'react';
import {
  Link,
  Route,
  Switch
} from "react-router-dom";
import './css.scss';


const Default = () => <div>Please click link</div>;
const ErrorAlert = () => <div>404 !! This is not correct url </div>

const TempMessage = ({match}) => {
  console.log(match.params.type);
  
  return <div>TempMessage{match.params.type}</div>;
};
const Contact = ({match}) => {
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
          <Route path={`${match.path}/:type`} component={TempMessage} />
          <Route component={ErrorAlert} />
        </Switch>
      </section>
    </div>
  );
};
export default Contact;
