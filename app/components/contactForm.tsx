'use client'
import React from 'react'
import { ChangeEvent } from 'react';
import {useState} from 'react'

const Contact = () => {
    const [data,setData] = useState(
        { 
          name:"",
          email:"",
          message:""
         })

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = event.target;

  setData(prevData => ({
    ...prevData,
    [name]: value
  }));
};


    
  return (
    <form action="/" method='POST' className='flex flex-col justify-center items-center' >
        <div className="form-field">
            <label htmlFor="name">Name</label>
            <input 
            type="text" 
            name="name" 
            id="name" 
            onChange={handleChange}
            value={data.name}
            />
        </div>
        <div className="form-field">
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            name="email" 
            id="email"  
            onChange={handleChange}
            value={data.email}
            />
        </div>
        <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
            name="message"
            id="message"  
            onChange={handleChange}
            value={data.message}
            />
        </div>
        <button className='block mt-12 w-60 h-12 bg-purple-900 text-white border-none rounded-lg mx-auto mb-12 hover:bg-purple-800'>Send</button>
    </form>
  )
}

export default Contact