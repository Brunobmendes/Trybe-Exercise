import React from "react";

function RenderEmail(){
  const {idNumber, emailValue, lida} = this.props
  return(
    <div>
      <span>
        {idNumber}
        {emailValue}
        {lida}
      </span> 
    </div>
  )
}

export default RenderEmail;