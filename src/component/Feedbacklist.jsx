import React from 'react'
import Feedbackitem from './Feedbackitem'

function Feedbacklist({feedback,handleDelete}) {
    if(feedback.length === 0 || !feedback ){
        return <p>No Feedback</p>
    }
    console.log(feedback)
  return (
    <div className='feedback-lsit'>
        {feedback.map((item)=>(
            <Feedbackitem key={item.id} feedback={item}
            handleDelete={handleDelete}/>
        ))}
        
    </div>
  )
}

export default Feedbacklist
