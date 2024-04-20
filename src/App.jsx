import React, { useState } from "react"
import './App.css'
import DisplayGifs from "./Components/DisplayGifs"
import AddCategory from "./Components/AddCategory"
function App() {
  const [category,setCategory] = useState('')
  return (
    <>
     <div className="App">
      <h2>Gifs App</h2>
      <AddCategory setCategory={setCategory} />
      <DisplayGifs category={category} />
    </div>
    </>
  )
}

export default App
