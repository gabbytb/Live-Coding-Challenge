import React, { useEffect, useState } from 'react';
import "../App.css";
import Header from '../Header';
import axios from 'axios';
// import $ from 'jquery';





const ranNum = Math.floor(23401*Math.random()) + Math.floor(2020*Math.random()) + Math.floor(247*Math.random());

function Registration() {

    const [user, setUser] = useState({
        id: ranNum,
        username: '', 
        firstName: '', 
        lastName: '', 
        email: '',
        password: '', 
        isActive: false,
    });
    const [errorMessage, setErrorMessage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false); 


    
    useEffect(() => {
        document.title = "Sign-up | Gabby";        
    }, []);



    function validateForm() {
        return user.email.length > 0 && user.password.length > 0;
    }    

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setUser({
          ...user, [name]: value
        });
    }      
    
    function handleOnKeyUp(e) {
        console.clear();
        console.log(`*****  COLLECTING USER DETAILS  *****
                    \nID: ${user.id} 
                    \nUsername: ${user.username} 
                    \nFull Name: ${user.firstName} ${user.lastName} 
                    \nEmail: ${user.email} 
                    \nPassword: ${user.password} 
                    \nisActive: ${user.isActive}`);
    }



    function handleSubmit(e) {
        e.preventDefault();

        axios.post("http://127.0.0.1:8000/api/v1/admin/users/manage/creat", user)
        .then(response => {
            const { success, data, message } = response.data;
            if (!success && message === "Fill all the required inputs.") {
                setIsSubmitting(false);
                setErrorMessage(message);
                console.log("Message: ", message);
                return;                    
            } else if (!success && message === "User with email exists. Please sign-in.") {
                setIsSubmitting(false);
                setErrorMessage(`E-mail ${user.email.toLowerCase()} exists. Please log-in`);
                console.log("Message: ", message);
                return;                    
            } else if (!success && message === "User with username exists. Please sign-in.") {
                setIsSubmitting(false);
                setErrorMessage(`Username ${user.username.toLowerCase()} exists. Please log-in`);
                console.log("Message: ", message);
                return;   
            } else {
                setIsSubmitting(true);

                // Optional(s)...
                console.log("Success: ", success,
                            "\nData: ", data,
                            "\nMessage: ", message);

                // const redirToAdminIfPossible = "/admin/dashboard";          // Try going to Dashboard after Sign-up
                // window.location.replace(redirToAdminIfPossible);
                return;
            }

        })
        .catch((error) => {
            console.log("*** ERROR: Error Occurred While Creating New User (Possible Error: Axios) ***");
            console.log("Error with API: ", error.name);
            console.log("API Error Message: ", error.message);
            console.log("API Error Response: ", error.code);
        });
    }


    

    return (
        <div className="Registration">
            <Header />
            <main>
                <h1 className="page-title">Create account</h1>

                <div className='d-flex container justify-content-center'>
                    <div className='row flex-column mx-auto' style={{width:360}}>

                        <div className={`alert thrones ${errorMessage ? 'alert-shown' : 'alert-hidden'}`}>
                            <h2 className='alert alert-danger'>{errorMessage}</h2>
                        </div>                    
                    

                        <form className="" onSubmit={handleSubmit}>

                            <input type="hidden" name="id" required />

                            <label htmlFor="username">Username
                                <input type="text" className="form-control" name="username" placeholder="Username" onChange={handleChange} onKeyUp={handleOnKeyUp} />
                            </label>

                            <div className="form-row d-flex justify-content-between">
                                <div className="col">
                                    <label htmlFor="firstName">First Name
                                        <input type="text" className="form-control" name="firstName" placeholder="First Name"  onChange={handleChange} onKeyUp={handleOnKeyUp} />
                                    </label>
                                </div>
                                <div className="col">
                                    <label htmlFor="lastName">Last Name
                                        <input type="text" className="form-control" name="lastName" placeholder="Last Name" onChange={handleChange} onKeyUp={handleOnKeyUp} />
                                    </label>
                                </div>
                            </div>

                            {/* <label htmlFor="phone">Phone Number
                                <input type="number" name="phone" placeholder="Phone Number"  onChange={handleChange} onKeyUp={handleOnKeyUp} value={user.phone} />
                            </label>

                            <label htmlFor="state">State
                                <select id="state" name="state" onChange={handleChange} onKeyUp={handleOnKeyUp} value={user.state}>
                                    <option defaultValue="">Choose...</option><option value="Abia">Abia</option><option value="Adamawa">Adamawa</option><option value="Akwa Ibom">Akwa Ibom</option><option value="Anambra">Anambra</option><option value="Bauchi">Bauchi</option><option value="Bayelsa">Bayelsa</option><option value="Benue">Benue</option><option value="Borno">Borno</option><option value="Cross River">Cross River</option><option value="Delta">Delta</option><option value="Ebonyi">Ebonyi</option><option value="Edo">Edo</option><option value="Ekiti">Ekiti</option><option value="Enugu">Enugu</option><option value="Gombe">Gombe</option><option value="Imo">Imo</option><option value="Jigawa">Jigawa</option><option value="Kaduna">Kaduna</option><option value="Kano">Kano</option><option value="Katsina">Katsina</option><option value="Kebbi">Kebbi</option><option value="Kogi">Kogi</option><option value="Kwara">Kwara</option><option value="Lagos">Lagos</option><option value="Nasarawa">Nasarawa</option><option value="Niger">Niger</option><option value="Ogun">Ogun</option><option value="Ondo">Ondo</option><option value="Osun">Osun</option><option value="Oyo">Oyo</option><option value="Plateau">Plateau</option><option value="Rivers">Rivers</option><option value="Sokoto">Sokoto</option><option value="Taraba">Taraba</option><option value="Yobe">Yobe</option><option value="Zamfara">Zamfara</option><option value="FCT, Abuja">FCT, Abuja</option>
                                </select>
                            </label> */}

                            <label htmlFor="email">Email
                                <input type="email" className="form-control" name="email" placeholder="Enter e-mail" onChange={handleChange} onKeyUp={handleOnKeyUp} />
                            </label>
                        
                            <label htmlFor="password">Password
                                <input type="password" className="form-control" name="password" placeholder="Enter password" onChange={handleChange} onKeyUp={handleOnKeyUp}/>        
                            </label>

                            <div className='tac d-flex'>
                                <label htmlFor="isActive" className='text'>I agree to terms and condition?
                                    <input type="checkbox" className='checkBox' name="isActive" onChange={handleChange} onKeyUp={handleOnKeyUp}/>
                                </label>
                            </div>

                            {/* onClick={() => setIsSubmitting(false)} */}
                            <button type="submit" className="form-control" disabled={!validateForm()}>Create account</button>

                            <div className={`alert alert-success ${isSubmitting ? 'alert-shown' : 'alert-hidden'}`} onTransitionEnd={() => setIsSubmitting(false)}>
                                <strong className='isSubmitting'>submitting...</strong>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}


export default Registration;




















// if (response.data === "Fill all the required inputs.") {
//     setIsSubmitting(false);
//     setRegistrationErrMsg("Fill all the required inputs"); 
//     // This optional callback function will be called when the fade-out is completed.
//     $('.alert').fadeOut(1000, function() {
//         console.log('Element faded out!');
//     });
//     return;             
//     return;
// } else if (response.data === "User with email exists. Please sign-in.") {
//     setIsSubmitting(false);
//     setRegistrationErrMsg(`Email: ${user.email.toLowerCase()} exists. Please log-in`);
//     // This optional callback function will be called when the fade-out is completed.
//     $('.alert').fadeOut(1000, function() {
//         console.log('Element faded out!');
//     });
//     return;
// } else if (response.data === "User with username exists. Please sign-in.") {
//     setIsSubmitting(false);
//     setRegistrationErrMsg(`Username: ${user.username.toLowerCase()} exists. Please log-in`);
//     // This optional callback function will be called when the fade-out is completed.
//     $('.alert').fadeOut(1000, function() {
//         console.log('Element faded out!');
//     });
//     return;
// } else {
//     setIsSubmitting(true);            
//     // const redirToLogin = "/user/login";
//     // window.location.replace(redirToLogin);

//     // setTimeout(() => {
//     //     window.location.href = "http://127.0.0.1:3000/user/login";
//     // }, 2500);
//     return;
// };