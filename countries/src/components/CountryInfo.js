import React from 'react';

const CountryInfo = ({country}) => {
    return (
        <div>
            <h3>{country.name.official}</h3>
            <div>
                <p>capital: <strong>{country.capital}</strong></p>
                <p>area: {country.area}</p>
            </div>
            <div>
                <h3>languages:</h3>
                <ul>
                    {Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}
                </ul>
            </div>
            <div>
                <img width="200px" src={country.flags.svg} alt={country.flags.alt}/>
            </div>
        </div>
    );
};

export default CountryInfo;