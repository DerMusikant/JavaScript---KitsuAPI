import React, { useState, useEffect } from 'react'

import { Slide } from './Slide'

export const Unreleased = () => {

  const [unreleased, setUnreleased] = useState([])
  const [fetching, setFetching] = useState(true)

  useEffect(
    () => {
      fetch('https://kitsu.io/api/edge/anime?filter[status]=unreleased')
        .then((res) =>  res.json())
        .then((res)=> {setUnreleased(res.data); setFetching(false)})
    },
    [])

  return (
    <>
      {fetching ? 'cargando': <Slide data={unreleased} name='unreleased'/>}
    </>
  )
}
