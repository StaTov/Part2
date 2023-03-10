import React from 'react';

const CountryList = ({allCountries, setAllCountries}) => {
    return (
        [...allCountries].map(country =>
            <div key={country.name.common}>{<img width="17px" src={country.flags.svg} alt={country.flags.alt}/>}{' '}{country.name.official}

                <button tupe="button" onClick={() =>
                    setAllCountries([country])}>show
                </button>
            </div>)
    );
};

export default CountryList;