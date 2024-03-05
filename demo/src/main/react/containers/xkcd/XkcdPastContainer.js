import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from '../components/nav/Nav';
const AppContainer = () => {
    const [xkcdCurrent, setXkcdCurrent] = useState({})
    const [xkcdPast, setXkcdPast] = useState({})
    const [userDefComicNum, setUserDefComicNum] = useState('')
    useEffect(() => {
        axios.get('/xkcd/current')
            .then(function (response) {
                setXkcdCurrent(response.data)
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    const fetchPastComic = (pastNum) => {
        //default number no matter what.
        // const defaultNum = xkcdCurrent.num ? xkcdCurrent.num : 2500;
        //did user define a number else pass a random number between 0 and default num
        const defaultNum = 2500
        const count = pastNum || userDefComicNum ? pastNum || userDefComicNum : Math.floor(Math.random() * defaultNum);
        axios.get(`/xkcd/past/${count}`)
            .then(function (response) {
                setXkcdPast(response.data)
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }




    return (
        <>
            <div>
                <button type="button" class="btn btn-primary" onClick={() => fetchPastComic()} >Get Random Comic</button>
            </div>
            <div>
                <input type="text" value={userDefComicNum} onChange={(e) => setUserDefComicNum(e.target.value)} placeholder="Enter a comic number" />
                <button disabled={userDefComicNum ? false : true}type="button" class="btn btn-info" onClick={() => fetchPastComic(userDefComicNum)} >Get User  Comic</button>
            </div>
            <h1>
                {xkcdPast.title}
            </h1>
            <p>
                {xkcdPast.transcript}
            </p>
            <div>
                {xkcdPast &&
                    <img src={xkcdPast.img} alt={xkcdPast.alt ? xkcdPast.alt : "No xkcd image for today"} />
                }
            </div>
        </>
    )
}
export default AppContainer