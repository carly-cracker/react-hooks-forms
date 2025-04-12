import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Carlos");
  const [lastName, setLastName] = useState("Korir");
  const [newsLetter, setNewsLetter] = useState(false)
  const [password, setPassword] = useState("")
  const [number, setNumber] = useState("")
  const [isInvalidNumber, setisInvalidNumber] = useState(null)

  function handleFirstNameChange(event){
    setFirstName(event.target.value)
  }

  function handleLastNameChange(event){
    setLastName(event.target.value)
  }  
  function handleNewsLetter (event){
    setNewsLetter(event.target.checked)
  }
  function handlePassword(event){
    setPassword(event.target.value)
  }
  function handleNumber(event){
    const newNumber = parseInt(event.target.value)
    if (newNumber >=0 && newNumber<= 5){
      setNumber(newNumber)
      isInvalidNumber(null)
    }
    else{
      setisInvalidNumber(`${newNumber} is invalid`)
    }

  }

  function handleSubmitForm (event){
    event.preventDefault()
    const formData = {
      firstName,
      lastName,
      password,
      number
    }
    console.log("form submitted", formData)
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <br />
      <label htmlFor="newsletter">Subscribe to our news letter</label>
      <input
      type="checkbox"
      id="newsletter"
      onChange={handleNewsLetter}
      checked = {newsLetter}
      />
      <br/>
      <label htmlFor="password">Password</label>
      <input 
        type="password"
        id="password"
        placeholder="********"
        onChange={handlePassword}
        value={password}
      />
      <br/>
      <h4>Rate my react please</h4>
      <br/>
      <label htmlFor="ratings">Ratings</label>
      <input 
        type="number"
        id="ratings"
        placeholder="rate"
        onChange={handleNumber}
        value={number}
      />
      {isInvalidNumber? <span style={{ color: "red" }}>{isInvalidNumber}</span> : "good"}
      <br/>
      <button type="submit">Submit</button>
      
    </form>
  );
}

export default Form;
