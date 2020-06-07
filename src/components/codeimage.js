import React from "react"

const CodeImage = ({ src, alt, width = "300px" }) => {
  return (
    <figure>
      <img src={src} alt={alt} width={width} />
    </figure>
  )
}

export default CodeImage
