import React from 'react'

import { Slide } from '../components/Slide'

export const Manga = () => {

    const MANGA = fetch('https://kitsu.io/api/edge/trending/manga')
      .then((res) =>  res.json() )
      .then((res)=> { console.log('manga',res)})

  return (
    <main>
      <Slide />
    </main>
  )
}
