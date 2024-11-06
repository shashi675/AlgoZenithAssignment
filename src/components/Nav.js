import React from 'react'

function Nav() {
  return (
    <div>
        <div className='Nav flex space-between'>
            <div className='heading flex'>
                <img src='./images/Menu.svg' alt='menu-icon' />
                <span className='logo bold'>AlgoZenith</span>
            </div>
            <div className='flex'>
                <img src='./images/Bell.svg' alt='bell-icon' />
                <img src='./images/Ellipse 13.svg' alt='ellipse-icon' />
            </div>
        </div>  
    </div>
  )
}

export default Nav
