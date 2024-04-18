import { create } from 'zustand'
import axios from 'axios';
export const useStore = create((set) => ({
    xkcdCurrentComic: {},
    xkcdPastComic: {},
    nasaCurrentImage: {}, 
    nasaPastImage: {},
    nasaPastDate: "2000-05-20",
    nasaCountImageArray: [],
    NasaDateRangeImageArray: [],
    NasaCount: 1,
    NasaStartDate: "2000-05-22",
    NasaEndDate: "2000-05-24",
    updateEndDate: (newEndDate) => set({NasaEndDate: newEndDate}),
    updateStartDate: (newStartDate) => set({NasaStartDate: newStartDate}),
    updateNasaDateRangeImageArray: (dateArray) => set({NasaDateRangeImageArray: dateArray}),
    updateCountImageArray: (newArray) => set({nasaCountImageArray: newArray}),
    updateNasaCount: (newCount) => set({NasaCount: newCount}),
    updatePastImage: (pastImage) => set({nasaPastImage: pastImage}),
    updateCurrentImage: (currentImage) => set({nasaCurrentImage: currentImage}),
    updateCurrent: (current) => set({xkcdCurrentComic: current}),
    updatePastDate: (date) =>set ({nasaPastDate: date}),
    fetchCurrentComic: async () => { 
        axios.get('/xkcd/current')
        .then(function (response) {
            set({xkcdCurrentComic : (response.data)})
            updateCurrent(response.data)
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    },
    fetchCurrentImage: async() =>{
        axios.get('/Nasa/singlenasaimage')
        .then(function (response) {
            set({nasaCurrentImage: (response.data)})
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })  
    },
    fetchPastImage: async (nasaPastDate) =>{
        const apiCall = "/Nasa/singlenasaimage?date="
        const userDate = nasaPastDate
        const fullCall = apiCall + userDate
        axios.get(fullCall)
            .then(function (response) {
                set({nasaPastImage: (response.data)})
                console.log(response);
            })
            .catch(function (error){
                console.log(error);
            })
    },
    fetchCount: async(count) => {
        const apiCall = "/Nasa/numbernasaimage?count="
        const allCode = ""
        const number = count
        const finalCall = apiCall + number
        axios.get(finalCall)
            .then(function (response) {
                set({nasaCountImageArray: (response.data)})
                console.log(response);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },
    fetchRange: async (start_date1, end_date1) => {
        const apiCall = "/Nasa/multidatenasa?start_date="
        const start_date = start_date1
        const end_date_html = "&end_date="
        const end_date = end_date1
        const finalCall = apiCall + start_date + end_date_html + end_date
        axios.get(finalCall)
            .then(function (response) {
                set({NasaDateRangeImageArray: (response.data)})
                console.log(response);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
}))
