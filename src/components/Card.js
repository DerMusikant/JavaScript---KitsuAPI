import React from 'react'

export const Card = (props) => {

  const sliceDescription = (desc) => {
    if(desc){
      let more
      desc.length > 200 ? more = '...' : more = ''
      return (desc.slice(0, 200) + more)
    }
    return 'No description available'
  }

  return(
  <div className='card flex justify-center items-center text-center'>
    <div className='flex flex-col w-full h-full m-px p-3 bg-red-300 rounded-xl'>
      <img src={props.data.attributes.posterImage.small} alt='' />
      <h3 className='font-semibold my-3'>
        {props.data.attributes.canonicalTitle}
      </h3>
      <p>
        {sliceDescription(props.data.attributes.synopsis)}
      </p>
    </div>
  </div>
)
}
