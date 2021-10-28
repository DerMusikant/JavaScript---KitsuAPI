import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Details = (props) => {

  let { id, type } = useParams()

  const [req, setReq] = useState([])
  const [fetching, setFetching] = useState(true)

  useEffect(
    () => {
      fetch(`https://kitsu.io/api/edge/${type}/${id}`)
        .then((res) =>  res.json())
        .then((res)=> {setReq(res.data); setFetching(false)})
    },
    [])

  return (
    <div className='flex flex-col items-center'>
      {fetching?'cargando':
        <>
          <h1>{req.attributes.canonicalTitle}</h1>
          <h2>{req.attributes.titles.ja_jp}</h2>
          <div className='flex justify-center items-center'>
            <img src={req.attributes.posterImage.small} alt='' />
            <p>{req.attributes.description}</p>
          </div>
          <div className='flex justify-center items-center'>
            <p>
              {req.attributes.ageRating}: {req.attributes.ageRatingGuide}
            </p>
          </div>
        </>
      }
    </div>
  )
}
