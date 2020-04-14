import React, { Component } from 'react';
import './index.css';
import DashboardPage from './components/pages/DashboardPage';
import Footer from './components/Footer';


class App extends Component {

  render() {
    return (
      <div className="flexible-content">
        <DashboardPage></DashboardPage>
       
        {/* <iframe src="demo_iframe.htm" name="iframe_a"></iframe> */}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
