import React, {Component} from "react";
import "./App.css";
import WebGL from "./webgl"
class App extends Component {
   render() {
   	  return (
          <div class="App">
             <h1>webgl window</h1>
             <WebGL/>
          </div>
   	  );
   }
};

export default App;