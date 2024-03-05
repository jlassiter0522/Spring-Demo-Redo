import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from './components/nav/Nav';
import { Outlet } from 'react-router-dom';
const AppContainer = () => {




  return (
    <>
      <Nav />
      <Outlet />
      
    </>
  )
}
export default AppContainer
/*component did mount
useEffect(() =>{


//  },[])
// componentDidUpdate
useEffect(() =>{


},[count]) //or instead of props we can use specific veriable names

//componentWillUnmount
useEffect(() =>{
return function cleanUp(){

}

},)
*/