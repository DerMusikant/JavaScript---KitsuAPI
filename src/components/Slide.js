import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Card } from './Card'

export const Slide = (props) => {

  const [slide, setSlide] = useState(null)


  const left = () => {
    //return styles to normal after transition ends
    const transition = () => {
      slide.classList.remove('transition')
    }

    const lastElement = slide.children[slide.children.length - 1]

    //Sets the slide ready to transition
    slide.insertBefore(lastElement, slide.children[0])
    slide.style.transform = `translateX(-${lastElement.offsetWidth}px)`

    setTimeout(() => {

      //Transition start
      slide.classList.add('transition')
      slide.removeAttribute('style')
      setTimeout(transition, 1000)
    },0)
  }

  const right = () => {

    //return styles to normal after transition ends
    const transition = () => {
      slide.classList.remove('transition')
      slide.removeAttribute('style')
      slide.appendChild(firstElement)
    }

    const firstElement = slide.children[0]

    //Transition start
    slide.classList.add('transition')
    slide.style.transform = `translateX(-${firstElement.offsetWidth}px)`



    setTimeout(transition, 1000)
  }


  //Set the slide on component mount.
  useEffect(() => {
    setSlide(document.querySelector(`#${props.name}`))
  }, [])

  const dataList = () => {

    return(
      props.data.map(
        (data) => {
          return(
          <div key={data.id} className='card transition text-center p-3'>
            <Link to={`${props.name=='manga'?'manga':'anime'}/${data.id}`}>
              <Card data={data} id={data.id}/>
            </Link>
          </div>
        )
        }
      )
    )
  }


  return (
    <div className='flex justify-center justify-self-center'>
      <button onClick={left} className='button w-1/12 h-full'>Prev</button>
      <div className='slide w-10/12'>
        <div id={props.name} className='container flex items-center'>
            {dataList()}
        </div>
      </div>
      <button onClick={right} className='button w-1/12 h-full'>Next</button>
    </div>
  )
}
