import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from '../components/nav/Nav';
const AppContainer = () => {
    const [NasaDate, setNasaDate] = useState({})
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




    return (
        <>
            <Nav />
            <div>
                <h1>{NasaDate.title}</h1>
            </div>
            <div>

            </div>

            <div>
                <img src={NasaDate.img} alt={NasaDate.alt ? NasaDate.alt : "No NASA image for today"} />
            </div>
            <div>
                <p>
                    {NasaDate.explanation}
                </p>
            </div>
        </>
    )
}
export default AppContainer