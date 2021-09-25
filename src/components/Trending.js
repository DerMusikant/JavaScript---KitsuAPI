import React from 'react'

import { Slide } from './Slide'

export const Trending = () => {

  const API = fetch('https://kitsu.io/api/edge/trending/anime')
    .then((res) =>  res.json() )
    .then((res)=> { console.log('trending',res)})

  return (
    <>
      <Slide />
    </>
  )
}
