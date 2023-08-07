import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import { useState } from 'react'
import RatingSelect from './RatingSelect'
function Feebackform({handleadd}) {
    const [text,setText]=useState('')
    const [rating,setRating]=useState('')
    const [btnDisabled,setBtnDisabled]=useState(true)
    const [message,setMessage]=useState('')
    const handlechange=(e)=>{
      if(text===''){
        setBtnDisabled(true)
        setMessage(null)
      }else if(text.length < 10 ){
        setBtnDisabled(true)
        setMessage('text must be 10 characters')
      }
      else{
        setBtnDisabled(false)
        setMessage(null)
      }
      setText(e.target.value)
    }
  const handlesubmit=(e)=>{
    e.preventDefault()
    if(text.length > 10){
      const newfeedback={
        text,
        rating
      }
      handleadd(newfeedback)
      setText('')
    }
  }
  return (
    <Card>
      <form onSubmit={handlesubmit}>
        <h2>How would u rate service with us ?</h2>
        <RatingSelect select={(rating)=>setRating(rating)} />
        <div className="input-group">
            <input type="text" placeholder='write a review' onChange={handlechange} value={text}/>
            <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default Feebackform
