import React from 'react'

function Menu() {
  return (
    <div className='menu-container'>
      <div className='menu-item flex'>
        <img src='./images/ViewGridOutline.svg' alt='ViewGridOutline' />
        <span>Dashboard</span>
      </div>
      <div className='menu-item flex'>
        <img src='./images/LightBulbOutline.svg' alt='LightBulbOutline' />
        <span>Learn</span>
      </div>
      <div className='menu-item flex'>
        <img src='./images/UserGroupOutline.svg' alt='UserGroupOutline' />
        <span>Forums</span>
      </div>
      <div className='menu-item flex selected'>
        <img src='./images/ClipboardOutline.svg' alt='ClipboardOutline' />
        <span>Upskill</span>
      </div>
      <div className='menu-item flex'>
        <img src='./images/ChartBarOutline.svg' alt='ChartBarOutline' />
        <span>Contest</span>
      </div>
      <div className='menu-item flex'>
        <img src='./images/StarOutline.svg' alt='StarOutline' />
        <span>Leaderboard</span>
      </div>
    </div>
  )
}

export default Menu
