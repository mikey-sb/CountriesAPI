import React, {useState, useEffect} from 'react'
// import CountryList from '../components/CountryList';
import CountryDetail from '../components/CountryDetail'
import CountrySelect from '../components/CountrySelect'
import WorldPop from '../components/WorldPop'


const CountryContainer = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);


    useEffect(() => {
        getCountries();
    }, [])


    const getCountries = function(){
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const onCountrySelect = (country) => {
        setSelectedCountry(country)
    }
    
 
    const findCountriesBorders = function() {
        // console.log(selectedCountry)
        if(selectedCountry !== null){
            let borderingCountriesA3C = selectedCountry.borders;
            let borderingCountries = countries.filter(country => borderingCountriesA3C.includes(country.alpha3Code));
            return borderingCountries;
        }
    }
    // console.log(selectedCountry?.borders)

    let borders = findCountriesBorders()

    // console.log(borders)

    
        
    
    return (
        <div className='main-container'>
        <input type="text"></input>
            {/* <CountryList countries={countries} /> */}
            <WorldPop countries={countries}/>
            <CountrySelect countries={countries} onCountrySelect={onCountrySelect}/>
            {selectedCountry ? <CountryDetail country={selectedCountry} borders={borders}/> : null}
        </div>
    )


}


export default CountryContainer;