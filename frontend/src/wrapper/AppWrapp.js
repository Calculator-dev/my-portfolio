import React from 'react'
import NavigationDots from '../components/Navbar/NavigationDots'
import SocialMedia from '../components/Navbar/SocialMedia'

const AppWrapp = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
        <div className='app__wrapper app_flex'>
            <Component />
            
        </div>
        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrapp