import React from 'react'

import { Manga } from '../components/Manga'
import { Trending } from '../components/Trending'
import { Unreleased } from '../components/Unreleased'

export const Main = () => {

  return (
    <main>
      <Trending />
      <Unreleased />
      <Manga />
    </main>
  )
}
