import React from 'react'
import { Navigate, useNavigate,Routes,Route } from 'react-router-dom'
function Post() {
    const status=200
    const navigate=useNavigate()
    const onClick= () =>{
        console.log('hello')
        navigate('/about')
    }
    if(status===404)
    {
        return <Navigate to='/not-found'/>
    }
    
  return (
    <div>
      <p>post Data</p>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path='/show' element={<h1>HELLO WORLD</h1>}/>        
        <Route path='/details' element={<h1>Details of pages</h1>}/>        
      </Routes>

    </div>
  )
}

export default Post
