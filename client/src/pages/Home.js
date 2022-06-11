import React from 'react'
import Card from '../components/Card'

import './Home.css'

const Home = () => {
    const getMonth = () =>{
        const date = new Date(Date.now());
        const month = date.toLocaleString('en-US', {month: 'long'}); // {month:'short'}
        return month
    }

  return (
    <div className="home_container">
        <p className="title_month">Plan for the Month of {getMonth()}</p>
        <Card />
    </div>
  )
}

export default Home