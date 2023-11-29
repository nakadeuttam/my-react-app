import React from 'react'
import { useState } from 'react'
export default function Alert(props) {





  return (
    <>
       { props.alertMsg &&<div className={"alert alert-success"} role="alert">
          {props.alertMsg}
        </div>
}

    </>
  )
}
