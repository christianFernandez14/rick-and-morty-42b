// Secuencia de correo electronico
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
// Al menos un numero
const regexPass = /\d/


const validation = (userData) => {
  const errors = {}

  // Validation to email:
  
  if (!regexEmail.test(userData.email)) {
    errors.email = 'No es un email valido'
  }

  if(userData.email === ''){
    errors.email = 'El campo no puede estar vacio'
  }

  if(userData.email.length > 36 ) {
    errors.email = 'Debe ser menor de 35 caracteres'
  }

  
  // Validation to password:

  if(!regexPass.test(userData.password)){
    errors.password = 'Debe contener al menos un número'
  }
  
  if(userData.password.length < 6) {
    errors.password = 'Debe tener al menos 6 caracteres'
  }

  if(userData.password.length > 10) {
    errors.password = 'No puede ser mayor a 10 caracteres'
  }


  return errors
}

export default validation