"use client"
import React, { forwardRef } from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {};
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  className?: string;
  error?: string;
}
const Input = forwardRef<HTMLInputElement.IProps>(
  ({  labelText, className,error ,...props}, inputRef) => {
    return (
      <div>
        <h1 className="ml-4 font-bold"> {labelText} *</h1>

        <div className={`${className}text-grey-500 relative m-3 mb-3 max-w-md`}>
          <input
          {...props}
          
            className="text-wrap peer inline-block h-16 w-full rounded-lg border-2 border-ruby-tint border-opacity-60 indent-2 align-middle placeholder-transparent shadow focus:border-ruby-shade focus:outline-none "
            placeholder=" "
            required
            ref={inputRef}
          />

          <label
            htmlFor={labelText}
            className=" text-grey peer-placeholder-shown:text-grey-400 peer-placeholder-shows:top-4 absolute left-4 top-5 z-10 text-lg transition-all peer-placeholder-shown:text-base peer-valid:top-1 peer-valid:text-sm peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-600 "
          >
            {labelText}
          </label>
        </div>
        {error && (
          <h1 className={`${error && "animate-shake"} text-red-500 mt-1`}>
            {error}
            </h1>
        )}
      </div>
    );
  };
);

export default Input;
