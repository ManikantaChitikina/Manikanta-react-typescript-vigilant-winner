import React from 'react'
import { PersonProps } from './Person.types'
// type PersonProps={
//     name:{
//         first:string,
//         last:string
//     }
// }
export const Person = (props:PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  )
}


