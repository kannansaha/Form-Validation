import  { useState } from 'react'

const UseForm = (validate) => {
 const [values, setValues]=useState({
        uname:"",
        email:"",
        password:"",
        password2:"",
 });
 const [errors,setErrors]=useState({})

        const handleChange = (e) => {
            const {value,name}=e.target;
            setValues((prevValues)=>{
                return{
                ...prevValues,
                [name]:value,
            }
            })

        }
        const handleSubmit = (event)=>{
            event.preventDefault();
            setErrors(validate(values));
        }

    
 
                

        return { handleSubmit,handleChange,values,errors}
}
export default UseForm;
