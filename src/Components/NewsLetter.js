import React from 'react'

export default function NewsLetter() {
  return (
    <div className="flex flex-col items-center gap-6 py-16 px-8 justify-center my-10 mx-32 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
        <div>
            <h1 className='text-4xl font-bold'>Get Exclusive offers On Your Email</h1>
            <p className=' text-sm pt-6 text-center'>Subscribe to our newsletter and stay updated</p>
        </div>
        <div className='flex items-center'>
            <input className='py-2 rounded-l-full px-4 outline-none' type="email" placeholder='Your email id'></input>
            <button className='rounded-r-full py-3 bg-black text-white px-4 text-sm' >Subscribe</button>
        </div>
    </div>
  )
}
