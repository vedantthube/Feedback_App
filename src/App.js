import Feedbacklist from "./component/Feedbacklist"
import Header from "./component/Header"
import { useState } from "react"
import Feedbackstats from "./component/Feedbackstats"
import Feedbackdata from "./Data/feedbackdata"
import Feebackform from "./component/Feebackform"
import {v4 as uuidv4} from 'uuid'

function App(){
    const [feedback,setFeedback]=useState(Feedbackdata)
    const handleDelete=(id)=>{
        setFeedback(feedback.filter((item)=>item.id !== id))
    }
    const addfeedback=(newfeedback) =>{
        newfeedback.id=uuidv4()
        setFeedback([newfeedback,...feedback])
    }

    return (
        <>
        <Header />
        <div className="container">
            <Feebackform handleadd={addfeedback}/>
            <Feedbackstats feedback={feedback}/>
            <Feedbacklist feedback={feedback} handleDelete={handleDelete}/>
            
        </div>
        </>

    )
}
export default App