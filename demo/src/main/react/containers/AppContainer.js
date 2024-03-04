import React, {useEffect, useState} from 'react'
import axios from 'axios';
const AppContainer = (props) => {
    const {name, color, object, count, increment} = props
    const [count2, setCount2] = useState(0)
    const [xkcdCurrent, setXkcdCurrent] = useState({})
    const [xkcdPast, setXkcdPast] = useState(null)
    const [userDefComicNum, setUserDefComicNum] = useState('')
    useEffect(()=>{
      axios.get('/xkcd/current')
      .then(function (response) {
        setXkcdCurrent(response.data)
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    },[])

    const fetchPastComic = (pastNum) => {
      //default number no matter what.
      const defaultNum = xkcdCurrent.num ? xkcdCurrent.num : 2500;
      //did user define a number else pass a random number between 0 and default num
      const count = pastNum ? pastNum : Math.floor(Math.random() * defaultNum);
      axios.get(`/xkcd/past/${count}`)
      .then(function (response) {
        setXkcdPast(response.data)
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }




    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              {name} {count2}
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" onClick={() => setCount2(count2 +1)}>{count2}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" onClick={() => increment }>{count}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <h1>Hello, Cole!</h1>
        <img src = {xkcdCurrent.img} alt={xkcdCurrent.alt ? xkcdCurrent.alt : "No xkcd image for today"} />
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </label>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Example textarea
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </label>
        </div>
        { xkcdPast && 
          <img src = {xkcdPast.img} alt={xkcdPast.alt ? xkcdPast.alt : "No xkcd image for today"} />
        }
        <div>
            <button type="button" class="btn" onClick={() => fetchPastComic()} >Get Random Comic</button>
        </div>
        <div>
          <input type="text" value={userDefComicNum} onChange={(e) => setUserDefComicNum(e.target.value)} placeholder="Enter a comic number" />
          <button type="button" class="btn" onClick={() => fetchPastComic(setUserDefComicNum)} >Get User Defined Comic</button>
        </div>
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