import './App.css';
import {useState, useEffect} from "react";
import countriesService from "./services/countriesService";
import ShowCountry from "./components/ShowCountry";


const App = () => {

    const [allCountries, setAllCountries] = useState([])
    const [filterCountry, setFilterCountry] = useState('')

    const handleChange = (event) => {
        setFilterCountry(event.target.value)
    }

    useEffect(() => {
        if (filterCountry) {
            countriesService
                .getAll()
                .then(initialCounties => {
                    setAllCountries(initialCounties.filter(country => country.name.official.toLowerCase().indexOf(filterCountry.toLowerCase()) !== -1))
                })
        }
    }, [filterCountry])

    return (
        <div>
            <div>
                find countries <input value={filterCountry} onChange={handleChange}/>
            </div>
            <div>
                <ShowCountry
                    filterCountry={filterCountry}
                    setAllCountries={setAllCountries}
                    allCountries={allCountries}/>
            </div>
        </div>

    );
}

export default App;
