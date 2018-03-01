import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import registerServiceWorker from './registerServiceWorker';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Header title="React Example" />
        <Main />
        <Footer date={new Date()}/>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
