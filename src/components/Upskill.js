import React from 'react';
import UpskillHeader from './UpskillHeader';
import Chapters from './Chapters';
import Detail from './Detail';


function Upskill() {
  return (
    <div className='upskill-container'>
      <UpskillHeader />
      <div className='flex'>
        <Chapters />
        <Detail />
      </div>
    </div>
  )
}

export default Upskill
