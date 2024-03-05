import React, {Component} from "react";
import ReactDom from "react-dom/client";
import AppContainer from "/containers/AppContainer"
import XkcdCurrentContainer from "./containers/xkcd/XkcdCurrentContainer"
import XkcdPastContainer from "./containers/xkcd/XkcdPastContainer"
import NasaDate from "./containers/nasa/NasaDate"
import XkcdArrayRespEx from "./containers/xkcd/XkcdArrayRespEx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <AppContainer></AppContainer>,
    children: [
      {
        index: true,
        element: <div> Empty Index</div>
      },

      {
        path: "currentxkcdcomic",
        element: <XkcdCurrentContainer></XkcdCurrentContainer>
      },
      {
      path:"pastxkcdcomic",
      element:<XkcdPastContainer />
      },
      {
        path:"nasadate",
        element: <NasaDate />
      },
      {
        path: "example",
        element: <XkcdArrayRespEx></XkcdArrayRespEx>
      }
    ]
  },
])

ReactDom.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
      <RouterProvider router = {router} />
  </React.StrictMode>
)
/*export class App extends Component{
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
