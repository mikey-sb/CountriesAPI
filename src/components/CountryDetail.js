import React from 'react' 
import './ListItem.css'

const CountryDetail = ({country, key, borders}) => {


    let langSpoken = country.languages.map((language, index) => {
        return <li key={index}>{language.name}</li>
    })


    let borderingCountries = []
    for(let i=0; i < borders.length; i++ ){
        borderingCountries.push(borders[i].name)
    }

    // console.log(borderingCountries)

    let borderLi = borderingCountries.map((border, index) => {
        return <li key={index}>{border}</li> 
    })

    let borderPop = 0
    for(let i=0; i < borders.length; i++){
        borderPop += borders[i].population
    }



    return (
        
        <div>
            
            <h3>{country.name}</h3>
            <img src={country.flag} className="flag-image" alt="Flag of Country"/>
            <ul>{langSpoken}</ul>
            
            <ul>{borderLi}</ul>
            <p>Total population of bordering countries: {borderPop}</p>

            
        </div>
    )
}

export default CountryDetail;