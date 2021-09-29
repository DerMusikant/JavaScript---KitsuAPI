import React, { useState, useEffect} from 'react'

import { Slide } from './Slide'

export const Manga = () => {

  const [manga, setManga] = useState([])
  const [fetching, setFetching] = useState(true)

  useEffect(
    () => {
      fetch('https://kitsu.io/api/edge/trending/manga')
        .then((res) =>  res.json())
        .then((res)=> {setManga(res.data); setFetching(false)})
    },
    [])


  return (
    <>
      {fetching ? 'cargando': <Slide data={manga} name='manga'/>}
    </>
  )
}
