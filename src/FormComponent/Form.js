import React from 'react';
import FormSignUP from './FormSignUP';
import './Form.css';

const form = () =>{
    return (
        <>
        <h1>create your account</h1>
        <div className='form-container' >
            <span className='close-btn'>X</span>
            <div className='form-content-left'>
               
                    <div className="form-img">
                        <img src='form-validation\src\FormComponent\Formimages\tech.jpeg' alt=''></img>
    
                    </div>
            </div>
        
        <FormSignUP/>
        </div>
          
        </>
    );

}
export default form;