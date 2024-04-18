import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from '../components/nav/Nav';
import { useStore } from '../../resources/store.js';

const NasaDateRange = () => {
    const userStartDate = useStore((state) => state.NasaStartDate)
    const userEndDate = useStore((state) => state.NasaEndDate)
    const apiArray =useStore((state) => state.NasaDateRangeImageArray)
    const updateStart = useStore((state) => state.updateStartDate)
    const updateEnd = useStore((state) => state.updateEndDate)
    const fetchRange = useStore((state) =>state.fetchRange)
    return (

        <>
            <div style={{"margin-bottom" : "20px"}}>
                <input type="text" id="startDate" value={userStartDate} onChange={(e) => updateStart(e.target.value)} placeholder="YYYY-MM-DD" />
            </div>
            <div style={{"margin-bottom" : "20px"}}>
                <input type="text" id="endDate" value={userEndDate} onChange={(e) => updateEnd(e.target.value)} placeholder="YYYY-MM-DD" />
                <button type="button" class="btn btn-info" onClick={() => fetchRange(userStartDate, userEndDate)} >Enter Range</button>
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