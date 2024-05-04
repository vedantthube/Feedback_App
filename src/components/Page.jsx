import React,{useContext} from 'react'
import {FaTimes,FaEdit} from 'react-icons/fa'
import Card from './shared/Card'
import Feedbackcontext from '../context/FeedbackContext'
function Page({item}) {
  const {handledelete,editfeedback}=useContext(Feedbackcontext)
  
  return (
    <Card reverse={false}>
      <div className='num-display'>
      {item.rating}
      </div>
      <button className='close' onClick={()=>handledelete(item.id)}>
        <FaTimes color='purple'/>
      </button>
      <button className='edit' onClick={()=>editfeedback(item)}>
        <FaEdit color='purple'/>
      </button>
      <div>
        {item.text}
      </div>
    </Card>
  )
}
export default Page
