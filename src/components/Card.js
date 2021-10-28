import React, { useEffect, useState } from 'react'

export const Card = (props) => {

  const [info, setInfo] = useState(null)

  const handleEnter = () => {
    info.classList.remove('hidden')
  }

  const handleLeave = () => {
    info.classList.add('hidden')
  }

  const sliceDescription = (desc) => {
    if(desc){
      let more
      desc.length > 200 ? more = '...' : more = ''
      return (desc.slice(0, 200) + more)
    }
    return 'No description available'
  }

  const ageRating = (rate) => {
    switch (rate) {
      case "G": return ('G (General Audiences)');
      case "PG": return ('PG (Parental Guidance Suggested)');
      case "R": return ('R (Restricted)');
      case "R18": return ('R18 (Explicit)');
      default: return ('Not available')
    }
  }

  useEffect(() => {
    setInfo(document.getElementById(props.id))
  }, [])

  return(
  <div onMouseEnter={ handleEnter } onMouseLeave={ handleLeave } >
    <div className='flex items-center justify-around w-full h-full  bg-red-300 rounded-xl m-2'>
      <img src={props.data.attributes.posterImage.small} alt='' />
      <div className='flex flex-col justify-between'>
        <h3 className='font-semibold my-3'>
          {props.data.attributes.canonicalTitle}
        </h3>
        <div id={props.id} className='hidden text-xs'>
          <p className='my-2'>
            {sliceDescription(props.data.attributes.description)}
          </p>
          <p>
            Age rating: {ageRating(props.data.attributes.ageRating)}
          </p>
        </div>
      </div>
    </div>
  </div>
)
}
