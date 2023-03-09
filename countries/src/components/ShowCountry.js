import React from 'react';
import CountryList from "./CountryList";
import CountryInfo from "./CountryInfo";


const ShowCountry = ({filterCountry, setAllCountries, allCountries}) => {
    if (filterCountry === '') {
        return null
    }
    if (allCountries.length > 10) {
        return <div> To many matches, specify another filter</div>
    }
    if (allCountries.length < 10 && allCountries.length > 1) {
        return <CountryList
            allCountries={allCountries}
            setAllCountries={setAllCountries}/>
    }
    if (allCountries.length === 1) {
        const country = allCountries[0]
        return <CountryInfo country={country}/>
    }
}
export default ShowCountry;