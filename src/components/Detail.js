import React from 'react'
import ChapterContent from './ChapterContent'

function Detail() {
  return (
    <div className='detail'>
      <ChapterContent
        part="part 1" 
        title="Lorem ipsum dolor sit amet"
        time="02:00:00"
        level="medium"
        itemCount="5"
        isOpen={true}
        percentageComplete="45%"
       />
       <ChapterContent
        part="part 2" 
        title="Lorem ipsum dolor sit amet"
        time="02:00:00"
        level="medium"
        itemCount="12"
        isOpen={false}
        percentageComplete="20%"
       />
       <ChapterContent
        part="part 3" 
        title="Lorem ipsum dolor sit amet"
        time="02:00:00"
        level="medium"
        itemCount="12"
        isOpen={false}
        percentageComplete="0%"
       />
    </div>
  )
}

export default Detail
