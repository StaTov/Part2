import React from 'react';

const CountryList = ({allCountries, setAllCountries}) => {
    return (
        [...allCountries].map(country =>
            <div key={country.name.common}>{country.name.official}

                <button tupe="button" onClick={() =>
                    setAllCountries([country])}>show
                </button>
            </div>)
    );
};

export default CountryList;