import React, { useState } from "react";

const PasswordToggle = ()=>{
    const [showPassword, setShowPassword] = useState(false)
    const togglePassword = ()=>{
        setShowPassword((prev)=> !prev)
    }
    return{
        showPassword, togglePassword
    }
}

export default PasswordToggle