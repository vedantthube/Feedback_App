import {v4 as uuidv4} from 'uuid'
import { createContext,useState } from 'react'
const Feedbackcontext=createContext()
export const FeedbackProvider=({children})=>{
    const [feedback,setFeedback]=useState([
        
])
const [feedbackedit,setFeedbackedit]=useState({
    item:{},
    edit:false
})
const handledelete=(id)=>{
    if(window.confirm('Are u sure u want to delete')){
      setFeedback(feedback.filter((item)=> item.id !== id))
    }
}
const addfeedback=(newfeedback)=>{
    newfeedback.id=uuidv4()
    setFeedback([newfeedback,...feedback])
}
//set item to be updated
const editfeedback=(item)=>{
    setFeedbackedit({
        item,
        edit:true
    })

}
//update feedback item
const updatefeedback = (id,updItem)=> {

    setFeedback(feedback.map((item)=> (item.id === id ? {...item,...updItem} : item))
    )
}
    return <Feedbackcontext.Provider value={{
        feedback,
        feedbackedit,
        handledelete,
        addfeedback,
        editfeedback,
        updatefeedback
    }}>
        {children}
    </Feedbackcontext.Provider>
}
export default Feedbackcontext
