import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from './components/nav/Nav';
import { Outlet } from 'react-router-dom';
import { useStore } from '../resources/store.js';
const AppContainer = () => {
  const xkcdCurrentComic = useStore((state) => state.xkcdCurrentComic)
  const fetchCurrentComic = useStore((state) => state.fetchCurrentComic)
  console.log(xkcdCurrentComic)
  useEffect(() => {
    fetchCurrentComic()
  }, [])




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