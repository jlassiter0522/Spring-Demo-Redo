import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from '../components/nav/Nav';
const NasaCount = () => {
    const [userEnteredNumb, setUserEnteredNum] = useState("")
    useEffect(() => {
        const apiCall = "/Nasa/numbernasaimage?count="
        const number = userEnteredNumb
        const finalCall = apiCall + number
        axios.get(finalCall)
            .then(function (response) {
                const item = response.data.items.map((item)=> {
                    return{
                        "copyright" : item.copyright,
                        "date" : item.date,
                        "explanation" : item.explanation,
                        "hdrul" : item.hdurl,
                        "media_type" : item.media_type,
                        "service_version" : item.service_version,
                        "title" : item.title,
                        "url" : item.url
                    }
                })
            }, [])
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])



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
                <input type="text" id="DateID" value={userEnteredNumb} onChange={(e) => setUserEnteredNum(e.target.value)} placeholder="Date in yyyy-mm-dd format" />
                <button disabled={userEnteredDate ? false : true}type="button" class="btn btn-info" onClick={() => fetchPastImage()} >Get User  Comic</button>
            </div>
        </>
    )
}
export default NasaCount