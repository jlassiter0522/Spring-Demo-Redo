import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from '../components/nav/Nav';
const NasaDateRange = () => {
    const [userStartDate, setUserStartDate] = useState('')
    const [userEndDate, setUserEndDate] = useState('')
    const [apiArray, setApiArray] = useState([])
    const wholeCode = ""
    const fetchRange = (() => {
        const newNum = document.getElementById("startDate").value;
        const newNum2 = document.getElementById("endDate").value;
        const apiCall = "/Nasa/multidatenasa?start_date="
        const number = newNum
        const end_date_html = "&end_date="
        const end_date = newNum2
        const finalCall = apiCall + number + end_date_html + end_date
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
                <input type="text" id="startDate" value={userStartDate} onChange={(e) => setUserStartDate(e.target.value)} placeholder="YYYY-MM-DD" />
                <button disabled={userStartDate ? false : true} type="button" class="btn btn-info" onClick={() => fetchRange()} >Lock in Start Date</button>
            </div>
            <div style={{"margin-bottom" : "20px"}}>
                <input type="text" id="endDate" value={userEndDate} onChange={(e) => setUserEndDate(e.target.value)} placeholder="YYYY-MM-DD" />
                <button disabled={userEndDate ? false : true} type="button" class="btn btn-info" onClick={() => fetchRange()} >Lock in End Date</button>
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
export default NasaDateRange