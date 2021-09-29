import React, { useState, useEffect } from 'react'

import { Slide } from './Slide'

export const Trending = () => {

  const [trend, setTrend] = useState([])
  const [fetching, setFetching] = useState(true)

  useEffect(
    () => {
      fetch('https://kitsu.io/api/edge/trending/anime')
        .then((res) =>  res.json())
        .then((res)=> {setTrend(res.data); setFetching(false)})
    },
    [])


  return (
    <>
      {fetching ? 'cargando': <Slide data={trend}/>}
    </>
  )
}
