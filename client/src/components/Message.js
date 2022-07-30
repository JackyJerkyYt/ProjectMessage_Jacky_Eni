import React, { Component, useEffect, useState } from 'react'

import axios from 'axios'

const Messages = () => {

    const [arrayOfMessages, setArray] = useState([])
    
    useEffect(
        () => {
          axios.get("http://localhost:8085/message")
            .then((res) => {
              setArray(res.data)
            })
        }
    )

    return (
        <tbody>
            {
            arrayOfMessages.map((message) => {
                return(
                   
                        <tr>
                            <td>{message.user}</td>
                            <td>{message.text}</td>
                        </tr>
                    
                )
            })
            }
            </tbody>
        
    )
}

export default Messages