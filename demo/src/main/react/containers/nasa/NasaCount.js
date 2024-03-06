import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from '../components/nav/Nav';
const NasaCount = () => {
    const [userEnteredNumb, setUserEnteredNum] = useState('')
    const [apiArray, setApiArray] = useState([])
    const wholeCode = ""
    const fetchCount = (() => {
        const newNum = document.getElementById("number").value;
        console.log(userEnteredNumb)
        const apiCall = "/Nasa/numbernasaimage?count="
        const allCode = ""
        const number = newNum
        const finalCall = apiCall + number
        axios.get(finalCall)
            .then(function (response) {
                setApiArray(response.data)
                console.log(response);
                allCode += "test"
                console.log("test");

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    })
    return (

        <>
            <div style={{"margin-bottom" : "20px"}}>
                <input type="text" id="number" value={userEnteredNumb} onChange={(e) => setUserEnteredNum(e.target.value)} placeholder="Enter Count" />
                <button disabled={userEnteredNumb ? false : true} type="button" class="btn btn-info" onClick={() => fetchCount()} >Get Images</button>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {apiArray.map((nasa, index) => {
                    return (
                        <div className="card col" style={{ "width": "18rem", "margin" : '.5rem' }} key={index}>
                            <img src={nasa.url} className="card-img-top" alt={nasa.alt} />
                            <div className="card-body">
                                <h5 className="card-title">{nasa.title}</h5>
                                <p className="card-text">{nasa.explanation}</p>
                                <a href={nasa.hdurl} className="btn btn-primary">See Image</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default NasaCount