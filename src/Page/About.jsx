import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'
function About() {
  return (
    <Card>
    <div className='about'>
      <h1>About this project</h1>
      <p>This is a ReactJS Application to give Feedback for a service</p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
    </Card>
  )
}

export default About
