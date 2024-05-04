import React from 'react'
import PropTypes from 'prop-types'
function Header({bgcolor,color,text}) {
  return (
    <header style={{backgroundColor:bgcolor , color:color}}>
        <div className="container">
            <h2>{text}</h2>

        </div>
      
    </header>
  )
}
Header.defaultProps={
    text:'Feedback UI',
    bgcolor:'black',
    color:'pink'
}
Header.propTypes={
    text:PropTypes.string.isRequired,
}
export default Header
