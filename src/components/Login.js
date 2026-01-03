import React,{useRef,useState} from 'react';
import {Redirect,useHistory} from 'react-router-dom';
import './Login.css';

const Login=()=>{

    const emailRef=useRef();
    const passwordRef=useRef();
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const history=useHistory();

    const submitHandler = async(e)=>{
        e.preventDefault();
        
    

    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB0e7Z_UOBldjUY0i1y3N4i8t_odTfBaog`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true,
          }),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error.message || "Login failed");
      }
      console.log(data);
      localStorage.setItem('token',data.idToken);
      localStorage.setItem('email',data.email);

      

      history.replace("/products");
      setIsLoggedIn(true);
    } catch (err) {
      alert("Invalid email or password");
    }
    }

    // if(isLoggedIn){
    //     return <Redirect to='/products' />
    // }

    return (
        <div className="contact-container">
      <h2>Log in</h2>

      <form onSubmit={submitHandler}>
        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            ref={emailRef}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            ref={passwordRef}
            required
          />
        </div>

        <button type="submit" style={{ marginTop: "15px" }}>
          Log in
        </button>
      </form>
    </div>
    );
}

export default Login;