import React, { useEffect } from 'react'

const Header = ({title,closenav}) => {
    // useEffect(() => {
    //     closenav();	
    //   }, [])
      
    
  return (
    <div className="banner">
        <img src="images/banner.jpg" alt="" />
        <h3 className="text">
            {title}
        </h3>
    </div>
  )
}

export default Header