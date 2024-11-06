import React from 'react'

function Chapters() {
  return (
    <div className='chapters'>
      <div className='chapter-item flex selected-chapter'>
        <span className='chapter-name selected-chapter-name'>Chapter 1</span>
        <span className='flex'>
            <img src='./images/ClockOutline.svg' alt='ClockOutline' />
            <span>05:00:00</span>
        </span>
      </div>
      <div className='border'></div>
      <div className='chapter-item'>
        <span className='chapter-name'>Chapter 2</span>
      </div>
      <div className='border'></div>
      <div className='chapter-item'>
        <span className='chapter-name'>Chapter 3</span>
      </div>
      <div className='border'></div>
      <div className='chapter-item'>
        <span className='chapter-name'>Chapter 4</span>
      </div>
      <div className='border'></div>
      <div className='chapter-item'>
        <span className='chapter-name'>Chapter 5</span>
      </div>
      <div className='border'></div>
    </div>
  )
}

export default Chapters
