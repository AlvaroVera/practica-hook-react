import React from 'react'
import useForm from '../hooks/useForm';

const FormularioComponent = () => {

    const initialForm = {
        userName: '',
        email: '',
        password: ''
    }


    const { formState, userName, email, password, onInputChange } = useForm(initialForm)

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    }

  return (
    <form onSubmit={ onSubmit }>
        <div className="mb-3">
            <label htmlFor="userName" className="form-label">User Name</label>
            <input 
                type="text" 
                className="form-control" 
                name="userName" 
                value={ userName }
                onChange={ onInputChange }
            />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input 
                type="email" 
                className="form-control" 
                name="email" 
                aria-describedby="emailHelp"
                value={ email }
                onChange={ onInputChange }
            />
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
                type="password" 
                className="form-control" 
                name="password"
                value={ password }
                onChange={ onInputChange }
            />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default FormularioComponent
