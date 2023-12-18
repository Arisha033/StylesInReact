import React, { useState } from 'react'

// ***********updating objects in React************
export const ChangeObjects = () => {

    const [movie, setMovie] = useState({
        title: "Titanic",
        rating: 7
    })

    const changeRating = () => {
      // give react a brand new object
      setMovie({
        ...movie,
        rating: 5,
      })

      // const copyMovie = {
      //   ...movie,
      //   rating: 5,
      // }
      // setMovie(copyMovie)
    }

  return (
    <>
    <h3>Movie: {movie.title}</h3>
    <p>Ratings: {movie.rating}</p>
    <button type="button" onClick={changeRating} style={{border: '2px solid'}}>Change Rating</button>
    </>
  )
}

// ************ updating arrays of objects in React************* 
export const ChangeValuesInObjects = () => {
  const [series, setSeries] = useState([
    {
      id: 1,
      title: "Harry Potter",
      rating: 8
    },
    {
      id: 2,
      title: "Sacred Games",
      rating: 4
    },
    {
      id: 3,
      title: "The Archies",
      rating: 6
    }
  ])

  const handleClick = () => {
    setSeries(series.map((series) => (
      series.id === 2 ? {...series, title: "The Zombie World"} : series
    )))
  }
  return (
    <>
    {series.map((series) => (
      <li key={Math.random()}>{series.title}</li>
    ))}
    <button onClick={handleClick} style={{border: '2px solid'}}>Change Series Name</button>
    </>
  )
}
