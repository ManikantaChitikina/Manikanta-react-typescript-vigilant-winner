import React from 'react'
type InputProps ={
    value:string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = (props: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        console.log(event)
    }
  return (
    <div>
      {/* <input type='text' value={props.vaule} onChange={props.handleChange}> </input> */}
      <input type='text' value = {props.value} onChange = {handleInputChange}> </input>
    </div>
  )
}

