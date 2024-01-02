import React, { useEffect, useState } from 'react';
import "../App.css";
import Header from '../Header';
import axios from 'axios';
// import $ from 'jquery';






function Registration() {
    
    const [user, setUser] = useState({
        username: '', 
        firstName: '', 
        lastName: '', 
        email: '',
        password: '', 
        isActive: false,
    });
    const [inputValidation, setInputValidation] = useState(null);
    const [emailExistsMsg, setEmailExistsMsg] = useState(null);
    const [usernameExistsMsg, setUsernameExistsMsg] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false); 


    
    useEffect(() => {
        document.title = "Sign Up | Samuel Akinola Foundation";        
    }, []);



    function validateForm() {
        return user.email.length > 0 && user.password.length > 0;
    }    

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setUser({
          ...user,
          [name]: value
        });
    }      
    
    function handleOnKeyUp(e) {
        console.clear();
        console.log(`*****  COLLECTING USER DETAILS  *****
                    \nId: ${user.id} 
                    \nUsername: ${user.username} 
                    \nFull Name: ${user.firstName} ${user.lastName} 
                    \nEmail: ${user.email} 
                    \nPassword: ${user.password} 
                    \nisActive: ${user.isActive}`);
    }

    function handleSubmit(e) {
        e.preventDefault();

        axios.post("http://127.0.0.1:8000/api/v1/admin/users/manage/create", user)
        .then((response) => {
            if (response.data === "Fill all the required inputs.") {
                setIsSubmitting(false);
                setInputValidation("Fill all the required inputs");              
                return;
            } else if (response.data === "User with email exists. Please sign-in.") {
                setIsSubmitting(false);
                setEmailExistsMsg(`Email: ${user.email.toLowerCase()} exists. Please log-in`);
                return;
            } else if (response.data === "User with username exists. Please sign-in.") {
                setIsSubmitting(false);
                setUsernameExistsMsg(`Username: ${user.username.toLowerCase()} exists. Please log-in`);
                return;
            } else {
                setIsSubmitting(true);
                // setTimeout(() => {
                //     window.location.href = "http://127.0.0.1:3000/user/login";
                // }, 2500);
                return;
            };
        })
        .catch((err) => {
            console.log("Error occurred while creating new user: ", err);
        });
    }


    
    return (
        <div className="Registration">
            <Header />
            <main>
                <h1 className="page-title">Create account</h1>

                <div className='d-flex container justify-content-center'>
                    <div className='row flex-column mx-auto' style={{width:360}}>

                        <div className={`alert valhalla ${inputValidation ? 'alert-shown' : 'alert-hidden'}`}>
                            <h2 className='alert alert-danger'>{inputValidation}</h2>
                        </div> 
                        <div className={`alert winter ${emailExistsMsg ? 'alert-shown' : 'alert-hidden'}`}>
                            <h2 className='alert alert-danger'>{emailExistsMsg}</h2>
                        </div>
                        <div className={`alert thrones ${usernameExistsMsg ? 'alert-shown' : 'alert-hidden'}`}>
                            <h2 className='alert alert-danger'>{usernameExistsMsg}</h2>
                        </div>                    



                        <form className="" onSubmit={handleSubmit}>

                            <label htmlFor="username">Username
                                <input type="text" className="form-control" name="username" value={user.username} placeholder="Username" onChange={handleChange} onKeyUp={handleOnKeyUp} />
                            </label>

                            <div className="form-row d-flex justify-content-between">
                                <div className="col">
                                    <label htmlFor="firstName">First Name
                                        <input type="text" className="form-control" name="firstName" value={user.firstName} placeholder="First Name"  onChange={handleChange} onKeyUp={handleOnKeyUp} required />
                                    </label>
                                </div>
                                <div className="col">
                                    <label htmlFor="lastName">Last Name
                                        <input type="text" className="form-control" name="lastName" value={user.lastName} placeholder="Last Name" onChange={handleChange} onKeyUp={handleOnKeyUp} required />
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
                                <input type="email" className="form-control" name="email" value={user.email} placeholder="Enter e-mail" onChange={handleChange} onKeyUp={handleOnKeyUp} />
                            </label>
                        
                            <label htmlFor="password">Password
                                <input type="password" className="form-control" name="password" value={user.password} placeholder="Enter password" onChange={handleChange} onKeyUp={handleOnKeyUp}/>        
                            </label>

                            <div className='tac d-flex'>
                                <label htmlFor="isActive" className='text'>I agree to terms and condition?
                                    <input type="checkbox" className='checkBox' name="isActive" value={user.isActive} onChange={handleChange} onKeyUp={handleOnKeyUp}/>
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