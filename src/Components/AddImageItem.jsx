import React from 'react'

const AddImageItem = ({title,url}) => {
  return (
    <div>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default AddImageItem
