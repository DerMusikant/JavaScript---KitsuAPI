import React from 'react'

import { Manga } from '../components/Manga'
import { Trending } from '../components/Trending'
import { Unreleased } from '../components/Unreleased'

export const Main = () => {

  return (
    <main>
      <div className='grid p-5 w-full'>
        <h2>
          Top 10 trending Anime:
        </h2>
        <Trending />
      </div>
      <div className='grid p-5 w-full'>
        <h2>
          Top 10 unreleased Anime:
        </h2>
        <Unreleased />
      </div>
      <div className='grid p-5 w-full'>
        <h2>
          Top 10 trending Manga:
        </h2>
        <Manga />
      </div>
    </main>
  )
}
