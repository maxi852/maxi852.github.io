import React from 'react'

export default function PDF() {
  return (
    <div style={{position: "absolute", widht:"100%", height:"100%"}}>
        <object data={require('../docs/ReactJs.pdf')}
        type="application/pdf"
        width="100%"
        height="100%">
            
        </object>
    </div>
  )
}
