import React from "react";

const Input = (inputType, inputName, labelName) => {
  return (
    <div>
      <div className="text-grey-500 relative m-3 mb-3">
        <input
          type={inputType}
          name={inputName}
          id={inputName}
          className="text-wrap peer inline-block h-16 w-full rounded-lg border-2 border-ruby-tint border-opacity-60 indent-2 align-middle placeholder-transparent  shadow focus:border-ruby-shade focus:outline-none"
          // placeholder={labelName}
        />

        <label
          htmlFor="Number"
          className="text-grey    peer-placeholder-shown:text-grey-400 peer-placeholder-shows:top-4 absolute  left-4  top-5 z-10
    text-lg
    transition-all
    peer-placeholder-shown:text-base 
    peer-focus:top-1
    peer-focus:text-sm
    peer-focus:text-gray-600
    
    "
        >
          {labelName}
        </label>
      </div>
    </div>
  );
};

export default Input;
