import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function FinalScreen() {
  const navigate = useNavigate();
  const score = useSelector((state) => state.score)

  return (
    <div className='d-flex flex-column'>
      <h3>Final Score: {score}</h3>
      <div className='select-buttons'>
        <button onClick={() => {navigate('/')}} className='btn'>Home</button>
        <button onClick={() => {navigate('/profile')}} className='btn'>Profile</button>
      </div>
    </div>
  )
}
export default FinalScreen