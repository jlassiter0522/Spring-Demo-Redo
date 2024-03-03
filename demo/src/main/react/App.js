import React, {Component} from "react";
import ReactDom from "react-dom";
import AppContainer from "/containers/AppContainer"
export class App extends Component{

    render(){
        return(
        <AppContainer />
    )
  }
}

ReactDom.render(<App />, document.querySelector("#app"));

