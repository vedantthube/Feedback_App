import React,{useContext} from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import Page from './Page'
import Feedbackcontext from '../context/FeedbackContext'
function FeedbackList() {
  const {feedback}=useContext(Feedbackcontext)
    if (!feedback || feedback.length === 0  ) {
        return <p>No Feedback</p>
    }
  return (
    <div className='feedback-list'>
    <AnimatePresence>
    
    {feedback.map((item)=>(
      <motion.div key={item.id} initial={{opacity:0} } animate={{opacity:1}} exit={{opacity:0}}>
        <Page key={item.id} item={item} />
      </motion.div>
    ))}
  
    </AnimatePresence>
    </div>
  )
}
export default FeedbackList