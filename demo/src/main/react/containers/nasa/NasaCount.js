import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from '../components/nav/Nav';
import { useStore } from '../../resources/store.js';
const NasaCount = () => {
    const apiArray = useStore((state) => state.nasaCountImageArray)
    const fetchCount = useStore((state) => state.fetchCount)
    const updateCount = useStore((state) => state.updateNasaCount)
    const nasaCount = useStore((state) => state.NasaCount)
    console.log(apiArray)

    return (

        <>
            <div style={{"margin-bottom" : "20px"}}>
                <input type="text" id="number" onChange={(e) => updateCount(e.target.value)} placeholder="Enter Count" />
                <button type="button" class="btn btn-info" onClick={() => fetchCount(nasaCount)} >Get Images</button>
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