import React, { useEffect } from 'react'
import styleForm from "./Form.module.css";
import validation from './validation'

const Form = ({ login }) => {

  const [userData, setUserData] = React.useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = React.useState({})

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })

  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    login(userData)
  }

  
  // Le hago segumiento a lo que coloca el usuario, con una dependencia userData, ya que hay un delay en la validacion
  useEffect(()=> {
    if(userData.email !== '' || userData.password !== ''){
      const userValidated = validation(userData)
      setErrors(userValidated)
  
      // Verifica lo siguiente:
      // setErrors({...errors, ...userValidated})
    }
  }, [userData])


  return (
    <div className= {styleForm.form} >
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name='email'
          value={userData.email}
          onChange={handleChange}
        />
        <br />
        {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
        <label htmlFor="">Password:</label>
        <input
          type="password"
          name='password'
          value={userData.password}
          onChange={handleChange}
          />
        <br />
          {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form