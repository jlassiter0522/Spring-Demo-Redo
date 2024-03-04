import React, {Component} from "react";
import ReactDom from "react-dom";
import AppContainer from "/containers/AppContainer"
export class App extends Component{
    constructor(props){
      super(props)
      this.state = {
        object:"Ball",
        count: 0
      }
    }


    render(){
      //const object = "Ball"
        const { object, count } = this.state
        const increment = () => {
        this.setState ({count: this.state.count + 1 })
      }
        return(
        <AppContainer
        name = "Cole"
        color = "Blue"
        object = {this.state.object}
        count = {count}
        increment = {increment}
        />
    )
  }
}



ReactDom.render(<App />, document.querySelector("#app"));

// components can have props and states 
//props -> passed down from parent
//states -> owned by the component
//prop and state changes in the component trigger updates to the DOM
    //life cycle methods -> 
  /*componentDidMount, = runs once when the component loads into DOM
        API Calls are best here, setState
    componentDidUpdate, = runs at every props or state change
      prevProps and preState and compare to current
    componentWillUnmount
      Clean up of subscriptions (Listoners)
    shouldComponentUpdate = rus at every props or state change
      defaults to true generally checking previous props/states to new ones. if return false component will not update.
    */
