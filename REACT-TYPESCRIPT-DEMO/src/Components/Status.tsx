import React from 'react'
type StatusProps={
    status:'Loading' |'Success' | 'error'
}
export const Status = (props:StatusProps) => {
    let message
    if(props.status ==="Loading")
    {
        message="Loading...."
    }
    else if(props.status ==="Success"){
        message="Data fetching successfully"
    }
    else if(props.status ==="error"){
        message="Error fetching in data"
    }
  return (
    <div>
     <h2>Status -{message}</h2>
    </div>
  )
}


