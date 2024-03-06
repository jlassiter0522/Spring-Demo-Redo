import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from '../components/nav/Nav';
const NasaDate = () => {
    const [NasaDate, setNasaDate] = useState({})
    const [userEnteredDate, setUserEntered] = useState("")
    useEffect(() => {
        axios.get('/Nasa/singlenasaimage')
            .then(function (response) {
                setNasaDate(response.data)
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    const fetchPastImage = (() => {
        const apiCall = "/Nasa/singlenasaimage?date="
        const userDate = userEnteredDate
        const fullCall = apiCall + userDate
        axios.get(fullCall)
            .then(function (response) {
                setUserEntered(response.data)
                console.log(response);
            })
            .catch(function (error){
                console.log(error);
            })
            
        document.getElementById('DateID').value = userDate
    })




    return (
        <>
            <div class="card" style={{"width" : "18rem"}}>
                <img src={NasaDate.url} class="card-img-top" alt="No Image Currenly" />
                    <div class="card-body">
                        <h5 class="card-title"> {NasaDate.title}</h5>
                        <p class="card-text">   {NasaDate.explanation} </p>
                        <a href={NasaDate.hdurl} class="btn btn-primary">Go to HD image</a>
                    </div>
            </div>
            <div class="card" style={{"width" : "18rem"}}>
                <img src={userEnteredDate.url} class="card-img-top" alt="No Image Currenly" />
                    <div class="card-body">
                        <h5 class="card-title"> {userEnteredDate.title}</h5>
                        <p class="card-text">   {userEnteredDate.explanation} </p>
                        <a href={userEnteredDate.hdurl} class="btn btn-primary">Go to HD image</a>
                    </div>
            </div>
            <div>
                <input type="text" id="DateID" value={userEnteredDate} onChange={(e) => setUserEntered(e.target.value)} placeholder="Date in yyyy-mm-dd format" />
                <button disabled={userEnteredDate ? false : true}type="button" class="btn btn-info" onClick={() => fetchPastImage()} >Get Image</button>
            </div>
        </>
    )
}
export default NasaDate