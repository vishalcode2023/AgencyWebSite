import React from 'react'
import MainRouter from './Routers/MainRouter'
import { Toaster } from 'react-hot-toast';

const  App = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <MainRouter/>
    </div>
  )
}

export default  App