import React  from 'react';
import UseForm from '../hooks/UseForm';
import validate from '../utils/validate';

const FormSignUP = () => {
  const {handleChange,values,handleSubmit,errors}=UseForm(validate)
  return (
    <div className="form-content-right">
      <form className='form' onSubmit={handleSubmit}>
        <h1>create an account</h1>
        <div className='form-inputs'>
          <label htmlFor='uname' className='form-label'>User Name :</label>
          <input 
          
          id='form-input' 
          type="uname"
          name="uname"
          placeholder='enter your username' 
          value={values.uname}
          className='form-input'
          onChange={handleChange}
          />
          {errors.uname && <p>{errors.uname}</p>}
        </div>

        <div className='form-inputs'>
          <label htmlFor='e-mail' className='form-label'>E-mail :</label>
          <input 
          id="email"
          type="email" 
          name='email'
          value={values.email}
          className='form-input' 
          placeholder='enter your e-mail'
          onChange={handleChange}
          />
           {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='password' className='form-label'>password :</label>
          <input id="password"
          type="password" 
          name='password'
          value={values.password}
          className='form-input' 
          placeholder='enter your password'
          onChange={handleChange}
          
          />
           {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='password2' className='form-label'>confirm password :</label>
          <input id="password2"
          type="password"
          name='password2' 
          value={values.password2}
          className='form-input' 
          placeholder='confirm password'
          onChange={handleChange}
         
          />
           { errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type="submit" >
          Sign Up
        </button>
        <p className='form-input-login'>
          already have an accoun? login <a href="#form" target='_blank'>here</a>
        </p>
       
      </form>

    </div>
  );
}

export default FormSignUP;
