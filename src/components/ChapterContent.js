import React from 'react';
import ChapterDetails from './ChapterDetails';


function ChapterContent({part, title, time, level, itemCount, isOpen, percentageComplete}) {
  return (
    <div className='chapter-content'>
        <div className='flex chapter-content-header'>
            <div className='left'>
                <div>{part}</div>
                <div className='title'>{title}</div>
            </div>
            <div className='right flex'>
                <span className='time flex'>
                    <img src='./images/ClockOutline.svg' alt='ClockOutline' />
                    <span>{time}</span>
                </span>
                <span className='time flex'>
                    <img src='./images/ChartBarOutline.svg' alt='ChartBarOutline' />
                    <span>{level}</span>
                </span>
                <span className='time flex'>
                    <img src='./images/DocumentDuplicateOutline.svg' alt='DocumentDuplicateOutline' />
                    <span>{itemCount}</span>
                </span>
                {isOpen ?
                <img src='./images/Vector.svg' alt='Vector' className='open-close-img' /> :
                <img src='./images/VectorClose.svg' alt='VectorClose' className='open-close-img' />
                }
            </div>
        </div>
        <span className='percentage-indicator flex'>
            {percentageComplete} completed
        </span>
        {isOpen ? 
        <ChapterDetails /> :
        ""
        }
        <div className='progress-bar' style={{background: "#EFF5FF", height: "10px", borderRadius: "0 0 10px 10px"}}>
            <div style={{background: "#172B4DD9", width: percentageComplete, height: "10px", borderRadius: "0 0 0 10px"}}></div>
        </div>
    </div>
  )
}

export default ChapterContent
