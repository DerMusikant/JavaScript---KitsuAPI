import React, { useEffect, useState } from 'react'

import { Card } from './Card'

export const Slide = (props) => {

  const [slide, setSlide] = useState(null)


  const left = () => {
    //return styles to normal after transition ends
    const transition = () => {
      slide.classList.remove('transition')
      slide.removeEventListener('transitionend', transition)
    }

    const lastElement = slide.children[slide.children.length - 1]

    //Sets the slide ready to transition
    slide.insertBefore(lastElement, slide.children[0])
    slide.style.transform = `translateX(-${lastElement.offsetWidth}px)`

    setTimeout(() => {

      //Transition start
      slide.classList.add('transition')
      slide.removeAttribute('style')
      slide.addEventListener('transitionend', transition)
    },0)
  }

  const right = () => {

    //return styles to normal after transition ends
    const transition = () => {
      slide.classList.remove('transition')
      slide.removeAttribute('style')
      slide.appendChild(firstElement)
      slide.removeEventListener('transitionend', transition)
    }

    const firstElement = slide.children[0]

    //Transition start
    slide.classList.add('transition')
    slide.style.transform = `translateX(-${firstElement.offsetWidth}px)`



    slide.addEventListener('transitionend', transition)
  }


  //Set the slide on component mount.
  useEffect(() => {
    setSlide(document.querySelector(`#${props.name}`))
  }, [])

  const dataList = () => {
    return(
      props.data.map(
        (data) => {
          console.log(data.attributes.description)
          return(
          <Card key={data.id} data={data}/>
        )
        }
      )
    )
  }


  return (
    <div className='justify-self-center relative w-5/6 m-3'>
      <div className='overflow-x-hidden'>
        <div id={props.name} className='flex'>
            {dataList()}
        </div>
      </div>
      <button onClick={left} className='absolute right-full inset-y-0'>Prev</button>
      <button onClick={right} className='absolute left-full inset-y-0'>Next</button>
    </div>
  )
}
