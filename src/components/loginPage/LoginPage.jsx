import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate() // router to ==> path home page
    

    function handleLoginSubmit() {
        //server request
        setTimeout(() => {
            navigate("/")
        },3000)
    }
  return (
      <div>
          <h1>Login Form </h1>
          <button onClick={handleLoginSubmit}>Login</button>
      </div>
  );
}
