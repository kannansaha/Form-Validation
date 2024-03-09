export default function validate(values){
    let errors={};
    if (!values.uname.trim()){
        errors.uname="please enter valid username"
    }

    if (!values.email.trim()){
        errors.email="enter valid email"
    }else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
        errors.email="email is invalid";
        
    }

    if (!values.password.trim()){
    
        errors.password ="password is required"
    }else if (values.password.length < 6){
        errors.password="password needs to more then 6 characters";
    }
    if (!values.password2.trim()){
        errors.password2="password is required"
    }else if(values.password2!==values.password) {
        errors.password2="password does not match"
    }

    return errors;
}