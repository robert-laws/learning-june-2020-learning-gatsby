import React from "react"

import style from "./codeimage.module.css"

const CodeImage = ({ src, alt, width = "300px" }) => {
  return (
    <figure className={style.my_image}>
      <img src={src} alt={alt} width={width} />
    </figure>
  )
}

export default CodeImage
