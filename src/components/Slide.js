import React, { useEffect, useState } from 'react'

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
    setSlide(document.querySelector('#slide'))
  }, [])

  const dataList = () => {
    return(
      props.data.map(
        (data) => {
          return(
          <div key={data.id}>
            <div className='mx-3'>
              {data.attributes.canonicalTitle}
            </div>
          </div>
        )
        }
      )
    )
  }

  return (
    <div className='relative w-4/5'>
      <div className='flex justify-self-center overflow-x-hidden'>
        <div id='slide' className='flex flex-nowrap'>
          {dataList()}
        </div>
      </div>
      <button onClick={left} className='absolute right-full inset-y-0'>Prev</button>
      <button onClick={right} className='absolute left-full inset-y-0'>Next</button>
    </div>
  )
}
