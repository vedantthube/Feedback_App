import React,{ useState,useContext,useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import Feedbackcontext from '../context/FeedbackContext'
function FeedbackForm() {
    const { addfeedback,feedbackedit,updatefeedback }=useContext(Feedbackcontext)
    const [text,setText]=useState('')
    const [btnDisable,setBtndisabled]=useState(true)
    const [message,setMessage]=useState('')
    const [rating,setRating]=useState(10)

    useEffect(()=>{
        if(feedbackedit.edit === true){
            setBtndisabled(false)
            setText(feedbackedit.item.text)
            setRating(feedbackedit.item.rating)
        }
    },[feedbackedit])
    const handlechange= (e)=>{
        if(text ===''){
            setBtndisabled(true)
            setMessage(null)

        }else if(text !== ''  && text.length < 9){
            setMessage('enter atleast 9 character')
            setBtndisabled(true)
            
        }
        else{
            setMessage(null)
            setBtndisabled(false)
            
        }
        setText(e.target.value)
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        if(text.length < 9){
            setBtndisabled(true)
            setMessage("enter atleast 9 character")
        }
        else if(text.length >= 9){
            const newfeedback={
                text,
                rating
            }
        if(feedbackedit.edit === true){
            updatefeedback(feedbackedit.item.id,newfeedback)
            feedbackedit.edit= false
        }
        else{
            addfeedback(newfeedback)
        }
        setText('')
        }
    }
  return (
    <Card>
        <form onSubmit={handlesubmit}>
            <h2>How would u Rate our services</h2>
            <RatingSelect select={(rating)=>setRating(rating)}/>
            <div className="input-group">
                <input type="text" placeholder='Write a review' onChange={handlechange} value={text}/>
                <Button type='submit' isDisabled={btnDisable}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>   
  )
}
export default FeedbackForm
