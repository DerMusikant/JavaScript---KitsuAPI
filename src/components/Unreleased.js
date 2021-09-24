import React from 'react'

import { Slide } from '../components/Slide'

export const Unreleased = () => {

  const UNRELEASED = fetch('https://kitsu.io/api/edge/anime?filter[status]=unreleased')
    .then((res) => res.json())
    .then((res)=> {console.log('unreleased',res)})

  return (
    <main>
      <Slide />
    </main>
  )
}
