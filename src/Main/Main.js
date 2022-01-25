import React from 'react'
import backgroundImg from '../background.png'
import './Main.css'
import Zodiac from '../ZodiacCard/ZodiacCard.js'

export default function Main(props) {
  const zodiacArr = props.zodiacs
  
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {/* import the ZodiacCard component */}
      {/* get the zodiac array from props */}
      {/* for each item in the `zodiacs` array props, render a ZodiacCard component, passing in the name and the dates as props to the ZodiacCard component */}
      {zodiacArr.map((zodiac, i) => <Zodiac key={zodiac.name + i} name={zodiac.name} dates={zodiac.dates}></Zodiac>)}
      {/* remember that when you map over an array and render out a list, each item in the list needs a unique 'key' prop */}
    </main>
  )
}
