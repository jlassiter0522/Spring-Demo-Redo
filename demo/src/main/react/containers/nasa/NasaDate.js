import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from '../components/nav/Nav';
import { useStore } from '../../resources/store.js';
const NasaDate = () => {
    const NasaDate = useStore((state) => state.nasaCurrentImage);
    const fetchPastImage = useStore((state) => state.fetchPastImage)
    const updatePastDate = useStore((state) => state.updatePastDate);
    const NasaPastImage = useStore((state) => state.nasaPastImage);
    const nasaPastDate = useStore((state) => state.nasaPastDate);
    console.log(NasaPastImage)
    




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
                <img src={NasaPastImage.url} class="card-img-top" alt="No Image Currenly" />
                    <div class="card-body">
                        <h5 class="card-title"> {NasaPastImage.title}</h5>
                        <p class="card-text">   {NasaPastImage.explanation} </p>
                        <a href={NasaPastImage.hdurl} class="btn btn-primary">Go to HD image</a>
                    </div>
            </div>
            <div>
                <input type="text" id="DateID" onChange={(e) => updatePastDate(e.target.value)} placeholder="Date in yyyy-mm-dd format" />
                <button disabled={NasaPastImage ? false : true}type="button" class="btn btn-info" onClick={() => fetchPastImage(nasaPastDate)} >Get Image</button>
            </div> 
        </>
    )
}
export default NasaDate