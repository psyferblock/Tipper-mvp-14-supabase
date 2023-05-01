import React from 'react'

const Input = () => {
  return (
    <div>  
         <div className="relative text-grey-500 m-3 mb-3">
    <input
      type="number"
      name="Number"
      id="Number"
      className="peer h-16 text-wrap placeholder-transparent border-2 border-ruby-tint border-opacity-60 shadow indent-2 inline-block align-middle w-full  rounded-lg focus:outline-none focus:border-ruby-shade"
      placeholder="Enter Number"
    />

    <label
      htmlFor="Number"
      className="absolute    left-4 top-5 z-10  text-grey  text-lg peer-placeholder-shown:text-base
    peer-placeholder-shown:text-grey-400
    peer-placeholder-shows:top-4
    transition-all
    peer-focus:top-1
    peer-focus:text-gray-600
    peer-focus:text-sm
    
    "
    >
      Enter Number
    </label>
  </div>
  </div>
  )
}

export default Input