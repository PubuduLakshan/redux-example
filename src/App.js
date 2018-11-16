import React, { Component } from 'react';
import './App.css';
import './components/postform';
import Post from './components/post';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <Post/>
      </div>
    );
  }
}

export default App;
