import React from 'react'
import Card from './shared/Card'
import {FaTimes} from 'react-icons/fa'


function Feedbackitem({feedback,handleDelete}) {
  return (
    <Card> 
      <div className="num-display">{feedback.rating}</div>
      <button className='close' onClick={()=>handleDelete(feedback.id)}>
      <FaTimes color='purple'/></button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  )
}
export default Feedbackitem
