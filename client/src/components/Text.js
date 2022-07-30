import React, { Component, useEffect, useState } from 'react'

import axios from "axios"


const Text = () => {
  const [userr, setUser] = useState("")
  const [descriptionn, setDescription] = useState("")




  const onChange = (event) => {
    setUser(event.target.value)
  }
  
  const onChange1 = (event) => {
    setDescription(event.target.value)
  }

  const submitHandler = async (event) => {
    event.preventDefault()

    const message = {
        user: userr,
        text: descriptionn
    }
    axios.post('http://localhost:8085/createMessage', message)
        .then(() => {
            console.log(message)
            setUser("")
            setDescription("")
        })
        .catch((err) => {
        
          console.log(err.message)
        })
  }

  return(

        <div>
            <form onSubmit={submitHandler}>
                <input value={userr} onChange={onChange} type="text"></input>
                <input value={descriptionn} onChange={onChange1} type="text"></input>
                <button type="submit">Add</button>
            </form>                
        
        </div>


  )
}

export default Text