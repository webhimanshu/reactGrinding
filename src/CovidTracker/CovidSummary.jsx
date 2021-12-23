import React from 'react'
import './covid.css';
import NumberFormat from 'react-number-format';
import Card from './Card';
const CovidSummary = (props) => {
    const {totalDeath,totalConfirmed,totalRecovered,country}=props;
    return (
        <div className='container'>
            <div>
                <h1>{country===''?'World Wide Corona report':country}</h1>
                <div className='card-container'>             
                   <Card   ><span>Total Confirmed</span><br></br><span>{<NumberFormat value={totalConfirmed} displayType='text' thousandSeparator={true}/>}</span></Card>
                <Card><span>Total Recovered</span><br></br><span>{totalRecovered===0 ? 'No data Found':<NumberFormat value={totalRecovered} displayType='text' thousandSeparator={true}/>}</span></Card>
                <Card><span>Total Death</span><br></br><span>{<NumberFormat value={totalDeath} displayType='text' thousandSeparator={true}/>}</span></Card>
                </div>

            </div>
        </div>
    )
}

export default CovidSummary
