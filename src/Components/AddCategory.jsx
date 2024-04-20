import React, { useState } from 'react'


const AddCategory = ({setCategory}) => {
   const [value,setValue] = useState('')
   const [error,setError] = useState(false)
   
   const handleSubmit = (e) => {
       e.preventDefault()
       if(value.trim().length <= 1){
           setError(true)
           return
       }
       setError(false)
       setCategory(value)
       setValue('')
  
       
   }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Search' />
        </form>
        {error ? <p className='error'>Error</p> : null}
      
    </div>
  )
}

export default AddCategory
