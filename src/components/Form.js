import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName:"carlos",
    lastName:"",
    newsLetter:false,
    password:"",
    number:"",
    isInvalidNumber:null
  })

  function handleSubmitForm (event){
    event.preventDefault()
    console.log("form submitted", formData)
  }
  function handleChange(event){
    const key = event.target.id
    const value = event.target.type === "checkbox"? event.target.checked : event.target.value
    setFormData({
      ...formData, 
      [key]:value
    }) 
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <input 
      type="text" 
      id="firstName"
      onChange={handleChange} 
      value={formData.firstName} 
      />

      <input 
      type="text" 
      onChange={handleChange} 
      id="lastName"
      value={formData.lastName} 
      />
      <br />
      <label htmlFor="newsletter">Subscribe to our news letter</label>
      <input
      type="checkbox"
      id="newsLetter"
      onChange={handleChange}
      checked = {formData.newsLetter}
      />
      <br/>
      <label htmlFor="password">Password</label>
      <input 
        type="password"
        id="password"
        placeholder="********"
        onChange={handleChange} 
        value={formData.password}
      />
      <br/>
      <h4>Rate my react please</h4>
      <br/>
      <label htmlFor="ratings">Ratings</label>
      <input 
        type="text"
        id="number"
        placeholder="rate"
        onChange={handleChange} 
        value={formData.number}
      />
      {formData.isInvalidNumber ? (
  <span style={{ color: "red" }}>{formData.isInvalidNumber}</span>
) : (
  <span style={{ color: "green" }}>✓ good</span>
)}
      <br/>
      <button type="submit" style={{borderRadius : "10px"}}>Submit</button>
      
    </form>
  );
}

export default Form;
