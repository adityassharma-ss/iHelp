import React, { useState } from 'react'
import "../styles/Signup.css"
import { useNavigate } from 'react-router-dom'
import { UserSignup } from "../service/AuthApi.js"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth0 } from '@auth0/auth0-react';


const Signup = () => {
    const navigate = useNavigate()
    const { loginWithRedirect } = useAuth0();
    const [creds, setCreds] = useState({ name: "", email: "", password: "" })

    const handleChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await UserSignup(creds);


        if (response.status === 201) {
            toast(response.data.message, {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                closeButton: false,
                onClose: () => {
                    navigate('/login');
                },
            });
        }


    }


    return (
        <>


            <div className="container signup_main_parent">

                <ToastContainer
                    position="top-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    closeButton={false}
                    limit={1}
                />

                <div className="signup_subparent">
                    {/* <img src="https://thumbs.dreamstime.com/b/technology-thinking-cute-cartoon-mechanic-developer-surrounded-flying-gears-product-development-science-technological-217642629.jpg" alt="" className='signup_img' /> */}

                    <div className="signup_textdiv">
                        <p className='signup_textdiv_p1'>Embark on a new adventure with us!</p>
                        <form className='signup_form'>


                            {window.innerWidth > 430 ? <div class="mb-4">
                                <label for="exampleInputPassword1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" autoFocus name='name' value={creds.name} onChange={handleChange} />
                            </div> : <div class="mb-4">
                                <label for="exampleInputPassword1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" name='name' value={creds.name} onChange={handleChange} />
                            </div>}


                            <div class="mb-4">


                                <label for="exampleInputEmail1" class="form-label" >Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={creds.email} onChange={handleChange} />

                            </div>




                            <div class="mb-4">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" name='password' value={creds.password} onChange={handleChange} />
                            </div>


                            <p className='signup_textdiv_p2'>Already have an account ? <span className='signup_textdiv_span2' onClick={() => { navigate("/login") }}>Log in</span></p>




                            <div className="signup_btndiv">
                                <button type="submit" class="btn  signup_btn" onClick={handleSubmit}>Signup</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Signup