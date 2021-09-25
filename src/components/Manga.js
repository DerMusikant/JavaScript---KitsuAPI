import React, {useState} from 'react'

import { Slide } from './Slide'

export const Manga = () => {


  
    const MANGA = fetch('https://kitsu.io/api/edge/trending/manga')
      .then((res) =>  res.json())
      .then((res)=> {console.log('manga', res)})



  return (
    <>
      <Slide />
    </>
  )
}
