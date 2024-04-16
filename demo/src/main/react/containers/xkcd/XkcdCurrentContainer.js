import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from '../components/nav/Nav';
import { useStore } from '../../resources/store.js';

const XkcdCurrentContainer = () => {
    const xkcdCurrent = useStore((state) => state.xkcdCurrentComic);



    return (
        <>
            
            <div>
                <h1>{xkcdCurrent.title}</h1>
            </div>
            <div>

            </div>

            <div>
                <img src={xkcdCurrent.img} alt={xkcdCurrent.alt ? xkcdCurrent.alt : "No xkcd image for today"} />
            </div>
            <div>
                <p>
                    {xkcdCurrent.transcript}
                </p>
            </div>
        </>
    )
}
export default XkcdCurrentContainer