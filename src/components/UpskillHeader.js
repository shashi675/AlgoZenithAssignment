import React from 'react'

function UpskillHeader() {
  return (
    <div className='upskill-header flex'>
      <div className='left flex'>
        <div className='menu-item flex'>
            <img src='./images/CalendarOutline.svg' alt='CalendarOutline' />
            <span>Mentor Sessions</span>
        </div>
        <div className='menu-item flex highlighted'>
            <img src='./images/BriefcaseOutline.svg' alt='BriefcaseOutline' />
            <span>Learning Material</span>
        </div>
      </div>
      <div className='right'>
        <div className='menu-item flex'>
            <img src='./images/InformationCircleOutline.svg' alt='InformationCircleOutline' />
            <span>How it works</span>
        </div>
      </div>
    </div>
  )
}

export default UpskillHeader
