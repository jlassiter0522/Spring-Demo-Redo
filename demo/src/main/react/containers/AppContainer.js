import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from './components/nav/Nav';
const AppContainer = (props) => {
  const { name, color, object, count, increment } = props
  const [count2, setCount2] = useState(0)
  const [xkcdCurrent, setXkcdCurrent] = useState({})
  const [xkcdPast, setXkcdPast] = useState(null)
  const [userDefComicNum, setUserDefComicNum] = useState('')
  useEffect(() => {
    axios.get('/xkcd/current')
      .then(function (response) {
        setXkcdCurrent(response.data)
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  const fetchPastComic = (pastNum) => {
    //default number no matter what.
    const defaultNum = xkcdCurrent.num ? xkcdCurrent.num : 2500;
    //did user define a number else pass a random number between 0 and default num
    const count = pastNum ? pastNum : Math.floor(Math.random() * defaultNum);
    axios.get(`/xkcd/past/${count}`)
      .then(function (response) {
        setXkcdCurrent(response.data)
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }




  return (
    <>
      <Nav />
      <h1>Hello, Cole!</h1>
      
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