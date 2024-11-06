import React from 'react'

function ChapterDetails() {
  return (
    <div className='chapter-details'>
      <div className='chpater-details-item flex'>
        <div className='left flex'>
            <img src='./images/PlayOutline.svg' alt='PlayOutline' />
            <div className='title'>Video 1</div>
        </div>
        <div className='right flex'>
            <img src='./images/ClockOutline.svg' alt='ClockOutline' />
            <div>10:00</div>
        </div>
      </div>
      <div className='border'></div>

      <div className='chpater-details-item flex'>
        <div className='left flex'>
            <img src='./images/QuestionMarkCircleOutline.svg' alt='QuestionMarkCircleOutline' />
            <div className='title'>Article 1</div>
        </div>
        <div className='right flex'>
            <img src='./images/ClockOutline.svg' alt='ClockOutline' />
            <div>10:00</div>
        </div>
      </div>
      <div className='border'></div>  
      <div className='chpater-details-item flex'>
        <div className='left flex'>
            <img src='./images/QuestionMarkCircleOutline.svg' alt='QuestionMarkCircleOutline' />
            <div className='title'>Quiz 1</div>
        </div>
        <div className='right flex'>
            <img src='./images/ClockOutline.svg' alt='ClockOutline' />
            <div>10:00</div>
        </div>
      </div>
      <div className='border'></div>  
      <div className='chpater-details-item flex'>
        <div className='left flex'>
            <img src='./images/CodeOutline.svg' alt='CodeOutline' />
            <div className='title'>Coding Exercise 1</div>
        </div>
        <div className='right flex'>
            <img src='./images/ClockOutline.svg' alt='ClockOutline' />
            <div>10:00</div>
        </div>
      </div>
      <div className='border'></div>  
      <div className='chpater-details-item flex'>
        <div className='left flex'>
            <img src='./images/DocumentDuplicateOutline.svg' alt='DocumentDuplicateOutline' />
            <div className='title'>Combined Resource 1</div>
        </div>
        <div className='right flex'>
            <img src='./images/ClockOutline.svg' alt='ClockOutline' />
            <div>10:00</div>
        </div>
      </div>
    </div>
  )
}

export default ChapterDetails
