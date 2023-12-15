
import React, { useState } from "react";
import ReactDOM from "react-dom";
function Contact() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const arrData = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        var { uname, pass } = document.forms[0];
        const userData = arrData.find((user) => user.username === uname.value);
        if (userData) {
            if (userData.password !== pass.value) {
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };
    

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (
        <div className="formContact">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                     <label>Username<span>*</span></label>
                  <br/>
                        <input type="text" name="uname" required className="uname" />
                 
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                     <label>Password<span>*</span> </label> <br/>
                     <input type="password" name="pass" required  className="pass"/>
                    {renderErrorMessage("pass")}
                </div>
                <div >
                    <input type="submit" className="btn btn-danger " />
                </div>
                        <div className="noAccount p-4">                        
                           <div><a href="#"> Create New Account</a> </div>
                            <div><a href="#"> Forget Password?</a> </div>
                        </div>
            </form> 
        </div>
    );

    return (
        <>
            
                <div className="logIn">
                    <div className="login-form">
                        <div className="title d-flex justify-content-center m-4 fs-1">Sign In</div>
                        {isSubmitted ? <div className="m-5">User is successfully logged in</div> : renderForm}
                    </div>  
                </div>
       
        </>
    );
}
export default Contact;





