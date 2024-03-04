import React, {useEffect, useState} from 'react'
const AppContainer = (props) => {
    const {name, color, object, count, increment} = props
    const [count2, setCount2] = useState(0)

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
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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