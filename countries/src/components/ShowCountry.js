import React from 'react';
import CountryList from "./CountryList";
import CountryInfo from "./CountryInfo";


const ShowCountry = ({filterCountry, setAllCountries, allCountries}) => {
    let length = allCountries.length

    switch (true) {
        case filterCountry === '':
            return null

        case length > 10:
            return <div> To many matches, specify another filter</div>

        case length < 10 && length > 1:
            return <CountryList
                allCountries={allCountries}
                setAllCountries={setAllCountries}/>

        case length === 1:
            return <CountryInfo country={allCountries[0]}/>
    }

}
export default ShowCountry;